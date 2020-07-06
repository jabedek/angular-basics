import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; // input from the Parent component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // output Delete evnet to the Parent component

  // Injecting a service
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed, // < that 'this.todo' is coming from @Input as a prop
    };
    return classes;
  }

  // event handlers

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
