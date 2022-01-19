import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todosList: Todo[];
  selectedRow: Todo;
  @Input() isEditing: boolean;
  
  @Output() isEditingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  todoPriorityAfterChange: Todo = new Todo();
  
  data;//zac
  subscription: Subscription;

  constructor(public http: HttpClient, private todoService: TodoService) { }

  ngOnInit(): void {
   this.getTodosList();
   setTimeout(() => {
     this.todosList.forEach(todo => {
       console.log(todo instanceof Todo)
     });
   } , 100);
   
  }

  ngAfterViewInit() {
    console.log('child', this.todosList)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getTodosList() {
    this.subscription = this.todoService.getAllTodos().subscribe((data) => {
      let tmpContainer: any[] = [];
      data.forEach(todo => {
        tmpContainer.push(new Todo({id: todo.id, title: todo.title, description: todo.description, completed: todo.completed, priority: todo.priority}));
      });
      this.todosList = tmpContainer;
    });
    
  }

  selectedFormToLoad($event) {
    // debugger;
    console.log('event from master', $event);
    this.selectedRow = $event;
    this.isEditingChange.emit(false);
    console.log('is this firing?',this.todosList)
  }

  todoPriorityChangeEvent($event: Todo) {
    
  }

}
