import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrl: './progress-card.component.css'
})
export class ProgressCardComponent {
  constructor(private router: Router) {}

  navigateToTask() {
    this.router.navigate(['/task']);
  }
}
