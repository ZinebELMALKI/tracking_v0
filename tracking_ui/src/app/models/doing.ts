import { Step } from "./step";

export interface Doing {
    id: number;
    title: string;
    description: string;
    url: string;
    step: Step
}
