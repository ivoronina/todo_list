import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoService {
  private todoList: any[] = ['sdsd', 'koko', 'pipi', 'fart'];
  constructor() { }

  getTodos() {
    return new Observable(observer => {
      observer.next(this.todoList);
      observer.complete();
    });
}
  addTodo(text){
    this.todoList.push(text);
  }
}
