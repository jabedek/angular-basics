import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // Injecting a service
  //
  // private/public keywords create and assign
  // a class instance property from
  // constructor's parameter and that way
  // they are available to use;
  // public can be used from outside a class
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    // Observable (data streaming), Observable's subscribe() works similarly to .then() in Promises
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
