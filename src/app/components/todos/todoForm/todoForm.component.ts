import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todoForm.component.html',
  styleUrls: ['./todoForm.component.scss']
})
export class EditTodoComponent implements OnInit {

  @Input() selectedRow: Todo;
  @Input() todosList: Todo[] = [];
  @Input() isEditing: boolean = false;

  @Output() todoPriorityChange: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onTodoPriorityChanged(todo: Todo) {
    console.log('this worked')
    this.todoPriorityChange.emit(todo);
  }

}
