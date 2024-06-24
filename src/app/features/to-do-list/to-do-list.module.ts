import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CreateTaskComponent } from './to-do-list/create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoListComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    ReactiveFormsModule
  ],
  providers:[DatePipe]
})
export class ToDoListModule { }
