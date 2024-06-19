import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { Step } from '../../models/step';
import { StepsService } from '../../services/steps/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  stepsList: Step[] = [];
  parcoursId!: number;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private stepsService: StepsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.parcoursId = +params['parcoursId']; 
      this.loadSteps(this.parcoursId);
      console.log("array1",this.stepsList);
    });
  }
  loadSteps(parcoursId: number): void {
    this.stepsService.getStepsByParcoursId(parcoursId).subscribe(
      (stepData: any) => {
        const step: Step = {
          id: stepData.id,
          title: stepData.title,
          description: stepData.description,
          duration: stepData.duration,
          parcours: {
            id: stepData.parcours.id,
            parcoursName: stepData.parcours.parcoursName,
            parcoursDescription: stepData.parcours.parcoursDescription
          },
          stepProcess: stepData.stepProcess
        };
        this.stepsList = [step];
        console.log("Transformed Step:", this.stepsList);
      },
      (error) => {
        console.error('Error fetching steps', error);
      }
    );
  }
  

  navigateToTask(): void {
    this.router.navigate(['/task']); 
  }
}
