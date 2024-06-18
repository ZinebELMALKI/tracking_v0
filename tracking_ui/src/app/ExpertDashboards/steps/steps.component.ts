import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepsService } from '../../services/steps/steps.service';
import { Step } from '../../models/step';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  steps: Step[] = [];
  formationId: number;
  newStep: Step;

  constructor(private route: ActivatedRoute, private stepsService: StepsService) {
    this.formationId = +this.route.snapshot.paramMap.get('formationId')!;
    this.newStep = {
      id: 0,
      title: '',
      description: '',
      stepProcess: '',
      startDate: new Date().toISOString().substring(0, 10), // Adjusting date format
      endDate: new Date().toISOString().substring(0, 10),   // Adjusting date format
      formation: {
        id: this.formationId,
        formationName: ''
      }
    };
  }

  ngOnInit(): void {
    this.loadSteps();
  }

  loadSteps(): void {
    this.stepsService.getStepsByFormationId(this.formationId).subscribe((steps: Step[]) => this.steps = steps);
  }

  addStep(): void {
    this.newStep.formation.id = this.formationId;
    this.stepsService.saveStep(this.newStep).subscribe((step: Step) => {
      this.steps.push(step);
      this.newStep = {
        id: 0,
        title: '',
        description: '',
        stepProcess: '',
        startDate: new Date().toISOString().substring(0, 10),
        endDate: new Date().toISOString().substring(0, 10),
        formation: {
          id: this.formationId,
          formationName: ''
        }
      };
    });
  }
}
