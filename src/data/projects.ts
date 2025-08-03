import type { Project } from '../types/project';
import { gymnasticCenterData } from './projects/gymnastic-center.data';
import { ucabGoData } from './projects/ucab-go.data';
import { inmobiliaData } from './projects/inmobilia.data';
import { gruasUcabData } from './projects/gruas-ucab.data';
import { agroshowData } from './projects/agroshow.data';

export const projects: Project[] = [
  agroshowData,
  gruasUcabData,
  gymnasticCenterData,
  ucabGoData,
  inmobiliaData,
];
