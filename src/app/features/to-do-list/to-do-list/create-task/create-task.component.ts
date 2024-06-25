import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { Task } from '../model';
import { DatePipe } from '@angular/common';
import { ToDoListService } from '../service/to-do-list.service';
import { ModeService } from 'src/app/core/service/mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  id!:string
  contentControlName = new FormControl<any>('',Validators.required)
  darkMode:Observable<boolean>
  @Output() eventClose = new EventEmitter()
  constructor(
    private datePipe:DatePipe,
    private taskService:ToDoListService,
    private modeService:ModeService
  ){
    this.darkMode = this.modeService.modoNocturno$
  }
  form = new FormGroup({
    id: new FormControl(''),
    content: this.contentControlName,
    taskDate: new FormControl(''),
    creationDate: new FormControl(new Date())
  })
  formattedCreationDateControl = new FormControl({ value: this.datePipe.transform(this.form.get('creationDate')?.value, 'dd/MM/yyyy'), disabled: true });

  createTask(){
    const idRandom= this.taskService.generateId()
    const data ={
      id:idRandom,
      content: this.form.value.content as string,
      taskDate:  this.form.value.taskDate as string,
      creationDate:  new Date() 
    }
    
    
    this.taskService.createTask(data)
    this.form.reset()
    this.formClose(false)
    
  }
  formClose(value: boolean) {
    this.eventClose.emit(value);
  }
 
}
