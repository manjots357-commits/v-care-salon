import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });

    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      if (material.uniforms.uResolution) {
        material.uniforms.uResolution.value.set(width, height);
      }
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Deep luxury cinematic shader: deep emerald, dark charcoal, champagne gold & bronze glow
    const fragmentShader = `
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x),
          mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(st);
          st *= 2.1;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        st.x *= uResolution.x / uResolution.y;

        vec2 mouseOffset = (uMouse - 0.5) * 0.08;
        st += mouseOffset;

        vec2 q = vec2(
          fbm(st + 0.015 * uTime),
          fbm(st + vec2(1.2, 2.4))
        );

        vec2 r = vec2(
          fbm(st + 0.8 * q + vec2(1.7, 4.2) + 0.06 * uTime),
          fbm(st + 0.8 * q + vec2(3.3, 1.8) + 0.05 * uTime)
        );

        float f = fbm(st + r);

        // Fluid oceanic palette matching user reference: #0A1931, #1A3D63, #4A7FA7, #B3CFE5, #F6FAFD
        vec3 cNavy = vec3(0.039, 0.098, 0.192);       // #0A1931 Deep oceanic dark
        vec3 cMarine = vec3(0.102, 0.239, 0.388);     // #1A3D63 Midnight sapphire
        vec3 cCerulean = vec3(0.290, 0.498, 0.655);   // #4A7FA7 Rich ocean slate blue
        vec3 cIceBlue = vec3(0.702, 0.812, 0.898);    // #B3CFE5 Soft sky ice mist
        vec3 cFrost = vec3(0.965, 0.980, 0.992);      // #F6FAFD Luminous arctic frost

        vec3 color = mix(cNavy, cMarine, clamp(f * 2.2, 0.0, 1.0));
        color = mix(color, cCerulean, clamp(length(q) * 0.85, 0.0, 1.0));

        // Fluid ribbon wave currents matching the swirl texture in reference image
        float waveIntensity = pow(clamp(r.x * 1.5 - 0.18, 0.0, 1.0), 2.8);
        color += mix(cCerulean, cIceBlue, f) * waveIntensity * 0.85;

        // Subtle center volumetric illumination with ice glow
        float centerGlow = exp(-length(st - vec2(0.5 * uResolution.x / uResolution.y, 0.5)) * 1.5);
        color += mix(cIceBlue, cFrost, 0.4) * centerGlow * 0.16;

        // Vignette framing
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        uv *= 1.0 - uv.yx;
        float vig = uv.x * uv.y * 16.0;
        vig = clamp(pow(vig, 0.32), 0.0, 1.0);
        color = mix(cNavy * 0.75, color, vig);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      transparent: true,
      depthWrite: false,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    // Floating luminous ice-blue mist ember particles
    function createEmberTexture() {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 32;
      pCanvas.height = 32;
      const ctx = pCanvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(246, 250, 253, 1)');
        gradient.addColorStop(0.35, 'rgba(179, 207, 229, 0.85)');
        gradient.addColorStop(0.7, 'rgba(74, 127, 167, 0.35)');
        gradient.addColorStop(1, 'rgba(10, 25, 49, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(pCanvas);
    }

    const particleCount = prefersReducedMotion ? 40 : 130;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVel: { x: number; y: number; phase: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 2;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 2;
      particlePositions[i * 3 + 2] = 0;
      particleVel.push({
        x: (Math.random() - 0.5) * 0.0006,
        y: Math.random() * 0.0012 + 0.0004,
        phase: Math.random() * Math.PI * 2,
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      map: createEmberTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    updateSize();
    window.addEventListener('resize', updateSize);

    let mouseTarget = { x: 0.5, y: 0.5 };
    let mouseCurrent = { x: 0.5, y: 0.5 };

    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.x = e.clientX / window.innerWidth;
      mouseTarget.y = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      animationId = requestAnimationFrame(renderLoop);

      const elapsed = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsed;

      // Mouse lerp
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.04;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.04;
      material.uniforms.uMouse.value.set(mouseCurrent.x, mouseCurrent.y);

      // Particle update
      if (!prefersReducedMotion) {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += particleVel[i].y;
          positions[i * 3] += Math.sin(elapsed * 1.5 + particleVel[i].phase) * 0.0003 + particleVel[i].x;

          if (positions[i * 3 + 1] > 1.1) {
            positions[i * 3 + 1] = -1.1;
            positions[i * 3] = (Math.random() - 0.5) * 2;
          }
        }
        particles.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      material.dispose();
      quad.geometry.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="webgl-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
