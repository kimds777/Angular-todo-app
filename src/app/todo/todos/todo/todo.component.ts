import { Component } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    <input type="checkbox" [checked]="todo.done"> {{ todo.text }}
  `,
  styles: []
})
export class TodoComponent {
  todo: Todo;
}
