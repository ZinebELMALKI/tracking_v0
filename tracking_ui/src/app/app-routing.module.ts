import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepsComponent } from './ExpertDashboards/steps/steps.component';
import { ProgressCardComponent } from './ExpertDashboards/steps-card/progress-card.component';
import { TaskBoardComponent } from './ExpertDashboards/task-board/task-board.component';
import { AddCategoryComponent } from './ExpertDashboards/add-category/add-category.component';
import { EditStepComponent } from './ExpertDashboards/edit-step/edit-step.component';
import { AddStepComponent } from './ExpertDashboards/add-step/add-step.component';
import { ParcoursProgressComponent } from './StudentDashboards/parcours-progress/parcours-progress.component';
import { StudentProfileComponent } from './StudentDashboards/student-profile/student-profile.component';
import { ParcoursComponent } from './ExpertDashboards/parcours/parcours.component';

const routes: Routes = [

  { path: 'steps/:formationId', component: StepsComponent },

  { path: 'parcours', component: ParcoursComponent },
  { path: 'steps', component: ProgressCardComponent },
  { path: 'task', component: TaskBoardComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-step', component: EditStepComponent },
  { path: 'add-step', component: AddStepComponent },
  { path: 'parcours-progress', component: ParcoursProgressComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: '', redirectTo: '/parcours', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
