export interface ExternalLink {
  label: string;
  url: string;
}

export interface GalleryItem {
  url: string;
  title?: string;
  externalLinks?: ExternalLink[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  gallery?: (string | GalleryItem)[];
  description: string;
  tags: string[];
  fullDescription: string;
  externalLinks?: ExternalLink[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export enum Section {
  HOME = 'home',
  WORK = 'work',
  ABOUT = 'about',
  CONTACT = 'contact'
}