import { Component } from '@angular/core';
import { ToDoListService } from './service/to-do-list.service';
import { Observable } from 'rxjs';
import { Task } from './model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  tasks$:Observable<Task[]>
  formActive:boolean = false
  constructor(private taskService:ToDoListService){
    this.tasks$ = this.taskService.tasks$
    taskService.loadTasks()
  }
  
  setForm(){
    this.formActive = !this.formActive
  }
  deleteTask(id:string){
    this.taskService.deleteTask(id)
  }
}
