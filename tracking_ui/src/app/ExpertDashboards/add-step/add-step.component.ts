import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StepsService } from '../../services/steps/steps.service';
import { Step } from '../../models/step';

@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrl: './add-step.component.css'
})
export class AddStepComponent implements OnInit {
  stepForm!: FormGroup;

  constructor(private fb: FormBuilder, private stepsService: StepsService) {
    this.stepForm = this.fb.group({
      title: '',
      description: '',
      duration: 0,
      parcours: this.fb.group({
        id: 1,
        parcoursName: '',
        parcoursDescription: ''
      }),
      stepProcess: ''
    });

  }

  ngOnInit(): void {

  }

  saveStep(): void {
    if (this.stepForm.valid) {
      const step: Step = this.stepForm.value;
      this.stepsService.saveStep(step).subscribe({
        next: (response) => {
          console.log('Step saved:', response);
        },
        error: (err) => {
          console.error('Error saving step:', err);

        }
      })
    }

  }


}
