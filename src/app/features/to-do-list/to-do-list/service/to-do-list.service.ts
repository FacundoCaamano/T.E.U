import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Task } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private _tasks$ = new BehaviorSubject<Task[]>([])
  public tasks$ = this._tasks$.asObservable() 
  constructor() { }

  loadTasks(){
    const tasks = localStorage.getItem('tasks')
    if(tasks){
      const tasksJson = JSON.parse(tasks)
      this._tasks$.next(tasksJson)
    }
  }

  saveTask(){
    this._tasks$
    .subscribe({
      next:(data)=>{
        const dataString = JSON.stringify(data)
        localStorage.setItem('tasks', dataString)
      }
    })
  }

  createTask(newTask:Task){
    this._tasks$
    .pipe(take(1))
    .subscribe({
      next:(data)=>{
        this._tasks$.next([newTask, ...data])
        this.saveTask()
      }
    })
  }
  
  deleteTask(id:string){
    this._tasks$
    .pipe(
      take(1),
      map(taks => taks.filter(t => t.id !== id))
    )
    .subscribe(
      {
        next:(data)=>{
          this._tasks$.next(data)
          this.saveTask()
        }
      }
    )
  }
   generateId(): string {
    const randomSuffix = Math.random().toString(36).substr(2, 9); 
    return randomSuffix; 
  }

}
