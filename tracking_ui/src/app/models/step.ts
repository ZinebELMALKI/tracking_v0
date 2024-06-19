
import { Parcours } from "./parcours";

export interface Formation {
  id: number;
  formationName: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  duration: number;
  parcours: Parcours;
  stepProcess: string;
}


