import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todosList: Todo[];
  @Output() selectedRowEmitter: EventEmitter<Todo> = new EventEmitter<Todo>();
  selectedRow: Todo;

  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    setTimeout(() => {console.log('child', this.todosList)} , 100);
    
  }

  onRowSelect(id: number, $event, todo: Todo) {
    console.log('event', $event)
    //we dont want to select the row if just the checkbox is clicked
    if($event.target.localName !== 'input') {
      //remove the previous selected row
      const previouslySelected = document.getElementsByClassName('selected');
      if( previouslySelected && previouslySelected.length > 0) {
        previouslySelected[0].classList.remove('selected');
      }
      //add the new selected row
      const row = document.getElementById(id.toString());
      row.classList.toggle('selected');
  
      //set the selected row
      this.selectedRow = todo;
      this.selectedRowEmitter.emit(this.selectedRow);
      console.log(this.selectedRow)


    } else {
      //chackbox was clicked
      $event.target.checked = !$event.target.checked;
    }
    
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  
  
}
