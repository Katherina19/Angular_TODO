import { Component, NgZone } from '@angular/core';

import { Task } from './tasks';     
import { TaskComponent } from './task.component';
 
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'ToDo List';
  tasks: Task[];
  editInputTask: number = -1;
  filterTask: string = 'all';
  
  constructor(private zone:NgZone) {
      this.tasks = new Array<Task>();
  }
  
  showDone(): void {
    this.filterTask = 'done';
    this.editInputTask = -1;
  };
  
  showActive(): void {
    this.filterTask = 'notDone';
    this.editInputTask = -1;
  };
  
  showAll(): void {
    this.filterTask = 'all';
    this.editInputTask = -1;
  };
  
  onTaskAdd(text: string): void {
    if (text)
      this.tasks = this.tasks.concat(new Task(this.tasks.length, text));
  };
  
  onTaskEdit(taskId: number, text: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId)
        task.task = text;
      return task;
    })
      
    this.editInputTask = -1;
  }
  
  onTaskStartEdit(taskId: number): void {
    this.editInputTask = taskId;
  }
  
  onTaskDelete(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
      .map((task, i) => {
        task.id = i;
        return task;
      })
      
    this.editInputTask = -1;
  };
  
  onTaskToggle(taskId: number): void {
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId)
        task.done = !task.done;
      return task;
    })
  }
}

