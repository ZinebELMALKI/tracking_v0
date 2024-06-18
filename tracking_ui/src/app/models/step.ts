export interface Formation {
  id: number;
  formationName: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  formation: Formation;
  stepProcess: string;
}
