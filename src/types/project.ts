export type Technology = {
  name: string;
  image: ImageMetadata;
};

export type Multimedia = {
  src: any;
  type: 'video' | 'image';
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  url?: string;
  thumbnail: ImageMetadata;
  hero: ImageMetadata;
  repoLinks: { title: string; href: string }[];
  history: string[];
  summary: string;
  summaryImages: ImageMetadata[];
  info: { title: string; body: string[]; media?: Multimedia[] }[];
  technologies: {
    summary: string[];
    frontend: Technology[];
    backend: Technology[];
  };
};
