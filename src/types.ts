export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  aspect?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
