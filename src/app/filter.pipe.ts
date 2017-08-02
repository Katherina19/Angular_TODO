import { Pipe, PipeTransform } from '@angular/core';

import { Task } from './tasks';  
 
@Pipe({
    name: 'filterTasks'
})
export class TasksPipe implements PipeTransform {
  transform(array: Task[], filter: string) {
      switch (filter) {
        case 'done':
          return array.filter(task => task.done);
        case 'notDone':
          return array.filter(task => !task.done);
        case 'all':
          return array;
      }
  }
}