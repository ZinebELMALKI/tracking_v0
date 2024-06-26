
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './ExpertDashboards/layouts/sidebar/sidebar.component';
import { HeaderComponent } from './ExpertDashboards/layouts/header/header.component';
import { TaskBoardComponent } from './ExpertDashboards/task-board/task-board.component';
import { TaskCardComponent } from './ExpertDashboards/task-card/task-card.component';
import { EditStepComponent } from './ExpertDashboards/edit-step/edit-step.component';
import { AddStepComponent } from './ExpertDashboards/add-step/add-step.component';
import { ParcoursProgressComponent } from './StudentDashboards/parcours-progress/parcours-progress.component';
import { StudentProfileComponent } from './StudentDashboards/student-profile/student-profile.component';
import { ParcoursComponent } from './ExpertDashboards/parcours/parcours.component';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './ExpertDashboards/steps-card/steps.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddLearningComponent } from './ExpertDashboards/add-learning/add-learning.component';
import { AddDoingComponent } from './ExpertDashboards/add-doing/add-doing.component';


@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    SidebarComponent,
    HeaderComponent,
    TaskBoardComponent,
    TaskCardComponent,
    EditStepComponent,
    AddStepComponent,
    ParcoursProgressComponent,
    StudentProfileComponent,
    ParcoursComponent,
    AddLearningComponent,
    AddDoingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
