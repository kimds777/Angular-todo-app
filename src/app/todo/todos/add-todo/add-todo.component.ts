import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
    <button (click)="addTodo(newText)">ADD</button>
  `,
  styles: ``
})
export class AddTodoComponent {
  @Output() onTodoAdded = new EventEmitter();
  newText!: string;

  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
