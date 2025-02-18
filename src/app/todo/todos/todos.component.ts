import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent,CommonModule,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  newText = '';

  todos: Todo[];

  constructor(){
    this.todos = [
     {done: false, text: '운동하기'},
     {done: true, text: '공부하기'}
    ];
  }

  toggleTodo(todo: any) {
    todo.done = !todo.done
  }

  addTodo(newText: string) {
    this.todos.push({
      done: false,
      text: newText
    });
    this.newText = '';
  }
}
