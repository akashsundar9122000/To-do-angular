import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userId!:string;
@Input({required:true}) name!:string;
isAddingTask = false; //typescript automatically knows the type when value is given
constructor(private taskService: TaskService){}

get selectedUserTasks(){
  return this.taskService.getUserTasks(this.userId);
}
onStartAddTask(){
  this.isAddingTask = true;
}
onCloseAddTask(){
  this.isAddingTask = false;
}
}
