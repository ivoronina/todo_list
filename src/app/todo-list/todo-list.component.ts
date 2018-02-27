import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {text} from '@angular/core/src/render3/instructions';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  addTodo(value) {
    this.todoService.addTodo(value);
    this.getTodos();
  }
  removeTodo(id) {
    this.todoService.removeTodo(id);
    this.getTodos();
  }
  switchStatusTodo(id) {
    this.todoService.switchStatusTodo(id);
    this.getTodos();
  }
  private getTodos() {
    this.todoService.getTodos().subscribe(
      (todos: Todo[]) => {
        this.todoList = todos;
      },
      () => {}
    );
  }
}
