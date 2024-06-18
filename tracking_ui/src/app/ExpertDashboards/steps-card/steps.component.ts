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
    });
  }

  loadSteps(parcoursId: number): void {
    this.stepsService.getStepsByParcoursId(parcoursId).subscribe(
      (steps) => {
        this.stepsList = steps;
        console.log(steps);
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
