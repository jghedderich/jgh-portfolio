export type Technology = {
  name: string;
  image: ImageMetadata;
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  thumbnail: ImageMetadata;
  hero: ImageMetadata;
  repoLinks: { title: string; href: string }[];
  history: string[];
  summary: string;
  summaryImages: ImageMetadata[];
  info: [{ title: string; body: string; images: ImageMetadata[] }];
  technologies: {
    summary: string[];
    frontend: Technology[];
    backend: Technology[];
  };
};
