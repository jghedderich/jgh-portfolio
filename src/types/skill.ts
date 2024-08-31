type skillType = 'learning' | 'frontend' | 'backend' | 'tools';

export type Skill = {
  name: string;
  url: string;
  image: ImageMetadata;
  type: skillType;
};
