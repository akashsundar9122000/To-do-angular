import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input({required:true}) userId!:string;
@Output() close = new EventEmitter<void>();
enteredTitle ='';
enteredSummary = '';
enteredDate = ''
isEmptyValue = false;
private taskService = inject(TaskService);

onCancelTask(){
  this.close.emit();
}

onSubmitForm(){
  if(!(this.enteredTitle.trim() === '') && !(this.enteredDate === '')){
    this.isEmptyValue = false;
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  } else{
    this.isEmptyValue = true;
  }
  }
}
