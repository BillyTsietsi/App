import { Component } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list = [];
  newList:string ='';
  editList:string ='';
 

  addList(){
    
    this.list.push(this.newList)
    this.newList=null;
  }

  delete(display) {
    let index = this.list.indexOf(display)   
    this.list.splice(index,1) 
  
      }

      edit(display) {


        let index = this.list.indexOf(display) 
        let answer = prompt("Edit Task",display) 
        this.list[index] = answer
        
        if (answer ==null || answer =="") {
        
          this.list[index] = display
        }
        
      }

      


     
}


