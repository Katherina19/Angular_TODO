import { Component, Output, Input, EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task.component';
import { TASKS } from './mock-array';
import { Task } from './tasks';  

@Component({
  selector: 'checkbox-component',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.css'],
})
export class CheckboxComponent {
    @Input() checked: boolean;
    @Output() onClick = new EventEmitter();
}