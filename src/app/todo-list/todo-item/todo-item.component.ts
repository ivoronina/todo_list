import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() remove = new EventEmitter();
  @Output() status = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeTodo(id) {
    this.remove.emit(id);
  }

  switchStatusTodo(id) {
    this.status.emit(id);
  }
}
