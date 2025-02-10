import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todo/todos/todos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular!!';
}
