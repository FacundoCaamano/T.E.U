import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule
  ]
})
export class ToDoListModule { }
