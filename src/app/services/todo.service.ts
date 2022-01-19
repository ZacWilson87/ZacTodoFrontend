import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../../environments/environment';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL: string = "";

  headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  todos: Todo[] = [];
  
  constructor(private http: HttpClient) {
    this.apiURL = Environment.apiURL;
  }

  getAllTodos() {
    return this.http.get(`${this.apiURL}/GetAllTodos`, { headers: this.headers }).
      pipe(
        map((res: Todo[]) => {
          return res;
        }), catchError(error => {
          return throwError( 'Something went wrong!' );
        })
      )
  }

}