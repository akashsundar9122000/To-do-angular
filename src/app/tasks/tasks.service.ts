import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
@Injectable({providedIn:'root'})
export class TaskService{
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ]

    constructor(){
        const tasks = localStorage.getItem("tasks");
        if(tasks){
            this.tasks = JSON.parse(tasks); //local storage only returns string need to convert it to json
        }
    }

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(newTaskData: NewTaskData, userId:string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: newTaskData.title,
            summary: newTaskData.summary,
            dueDate: newTaskData.date
        })
        this.saveTasks();
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks)); //need to convert json to string when putting to localstorage
    }
}