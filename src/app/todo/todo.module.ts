import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations : [TodosComponent],
  exports: [TodosComponent]
})
export class TodoModule { }
