import { Component, OnInit } from '@angular/core';
import { Step } from '../../models/step';
import { Router } from '@angular/router';
import { LearningService } from '../../services/learning/learning.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Learning } from '../../models/learning';

@Component({
  selector: 'app-add-learning',
  templateUrl: './add-learning.component.html',
  styleUrl: './add-learning.component.css'
})
export class AddLearningComponent implements OnInit {

  learningForm!: FormGroup;
  step!: Step;
  learning!: Learning;

  constructor(private router: Router,
    private learningService: LearningService,
    private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.step = navigation.extras.state['step'];
    }
    this.learningForm = this.fb.group({
      title: [''],
      description: [''],
      url: ['']
    });
  }

  ngOnInit(): void {
    this.learning = {
      id: 1,
      title: '',
      description: '',
      url: '',
      step: this.step
    }
    console.log(this.step);
  }

  saveLearning(): void {
    if (this.learningForm.valid) {
      this.learning = this.learningForm.value;
      this.learning.step = this.step;
      console.log(this.learning);
      this.learningService.saveLearning(this.learning).subscribe({
        next: (response) => {
          console.log('Learning saved:', response);
          this.router.navigate(['/add-doing'], { state: { step: this.step } });
        },
        error: (err) => {
          console.error('Error saving learning part:', err);
        }
      });
    }
  }
}
