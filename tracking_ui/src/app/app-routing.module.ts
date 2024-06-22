import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskBoardComponent } from './ExpertDashboards/task-board/task-board.component';
import { AddCategoryComponent } from './ExpertDashboards/add-category/add-category.component';
import { EditStepComponent } from './ExpertDashboards/edit-step/edit-step.component';
import { AddStepComponent } from './ExpertDashboards/add-step/add-step.component';
import { ParcoursProgressComponent } from './StudentDashboards/parcours-progress/parcours-progress.component';
import { StudentProfileComponent } from './StudentDashboards/student-profile/student-profile.component';
import { ParcoursComponent } from './ExpertDashboards/parcours/parcours.component';
import { StepsComponent } from './ExpertDashboards/steps-card/steps.component';
import { AddLearningComponent } from './ExpertDashboards/add-learning/add-learning.component';
import { AddDoingComponent } from './ExpertDashboards/add-doing/add-doing.component';

const routes: Routes = [


  { path: 'parcours', component: ParcoursComponent },
  { path: 'steps/parcours/:parcoursId', component: StepsComponent },
  { path: 'task', component: TaskBoardComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-step', component: EditStepComponent },
  { path: 'add-step', component: AddStepComponent },
  { path: 'add-learning', component: AddLearningComponent },
  { path: 'add-doing', component: AddDoingComponent },
  { path: 'parcours-progress', component: ParcoursProgressComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: '', redirectTo: '/add-step', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
