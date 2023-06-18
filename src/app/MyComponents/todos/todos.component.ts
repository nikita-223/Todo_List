import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  implements OnInit{
localItem : string | any;
  todos!: Todo[];
constructor(){ 
 this.localItem = localStorage.getItem("todos");
    if( this.localItem == null)
        this.todos=[]; 
    else
    console.log(this.localItem);
      this.todos= JSON.parse(this.localItem);
}

ngOnInit(): void {  
}
todoDelete(todo:Todo){
  const index= this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}

addTodo(todo: Todo){
this.todos.push(todo);
localStorage.setItem("todos",JSON.stringify(this.todos));
}
toggleTodo(todo: Todo){
  const index= this.todos.indexOf(todo);
  this.todos[index].active= ! this.todos[index].active;
  localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}



