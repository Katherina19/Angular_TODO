import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox.component'; 
import { Task } from './tasks';  

@Component({
  selector: 'todo-task',
  templateUrl: 'task.component.html',
  styleUrls: ['app.component.css'],
})
export class TaskComponent {
  @Input() task: Task;
  @Input() editInput: boolean;
  @Output() onTaskDelete = new EventEmitter();
  @Output() onTaskToggle = new EventEmitter();
  @Output() onTaskStartEdit = new EventEmitter();
  @Output() onTaskEdit = new EventEmitter();
}