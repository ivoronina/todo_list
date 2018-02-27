import {log} from 'util';

let maxId = 0;

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../models/todo';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];

  constructor() {
    this.todoList.push(new Todo({id: this.id, text: 'poop', status: false}));
    this.todoList.push(new Todo({id: this.id, text: 'pup', status: false}));
    this.todoList.push(new Todo({id: this.id, text: 'pop', status: false}));
  }

  getTodos() {
    return new Observable(observer => {
      observer.next(this.todoList);
      observer.complete();
    });
  }

  addTodo(text) {
    this.todoList.push(new Todo({id: this.id, text: text}));
  }

  removeTodo(id) {
    this.todoList = this.todoList.filter((item) => {
      return id !== item.id;
    });
  }

  get id() {
    return ++maxId;
  }

  switchStatusTodo(id) {
    this.todoList.map((item) => {
      if (id === item.id) {
        item.status = !item.status;
        console.log(item.status);
        return item;
      }
  });

  }
}
