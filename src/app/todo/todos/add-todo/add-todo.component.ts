import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px 16px 16px 10px;
      background-color: white;
    }

    input {
      display: inline-block;
      font-size: 18px;
      border: none;
    }

    input:focus, button:focus {
      outline: none;
    }

    button {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: darkblue;
    }
  `]
})
export class AddTodoComponent {
  @Output() onTodoAdded = new EventEmitter();
  newText!: string;

  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
