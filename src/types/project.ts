export type Project = {
  name: string;
  description: string;
  thumbnail: ImageMetadata;
  hero: {
    mobile: ImageMetadata;
    desktop: ImageMetadata;
  };
  repoLinks: { title: string; href: string }[];
  history: string[];
  summary: string;
  summaryImages: ImageMetadata[];
  info: [{ title: string; body: string; images: ImageMetadata[] }];
  technologies: {
    summary: string[];
    frontend: ImageMetadata[];
    backend: ImageMetadata[];
  };
};
