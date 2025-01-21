import type { Project } from '../types/project';
import { gymnasticCenterData } from './projects/gymnastic-center.data';
import { ucabGoData } from './projects/ucab-go.data';
import { inmobiliaData } from './projects/inmobilia.data';
import { gruasUcabData } from './projects/gruas-ucab.data';

export const projects: Project[] = [
  gruasUcabData,
  gymnasticCenterData,
  ucabGoData,
  inmobiliaData,
];
