import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { InputAddTaskComponent } from './components/input-add-task/input-add-task.component';
import { ButtonRemoveTasksComponent } from './components/button-remove-tasks/button-remove-tasks.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TasksListComponent,
    InputAddTaskComponent,
    ButtonRemoveTasksComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
