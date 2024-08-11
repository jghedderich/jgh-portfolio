type skillType = 'learning' | 'frontend' | 'backend' | 'tools';

export type Skill = {
  name: string;
  image: ImageMetadata;
  type: skillType;
};
