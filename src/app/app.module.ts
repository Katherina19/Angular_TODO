import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task.component';
import { CheckboxComponent } from './checkbox.component';
import { TasksPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CheckboxComponent,
    TasksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
