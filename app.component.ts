import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <div>
               <h1>{{pageTitle}}</h1>
               <ul *ngFor="let user of userList">
                  <li *ngIf="user.age>27">{{user.name}} {{user.age}}</li>
                </ul>
               <div>
                  <span>Span1</span>
                  <span>Span2</span>
                  <span [ngStyle]="{color:textcolor}">Span3</span>
                  <span >Span4</span>
                  <span>Span5</span>
               </div>
    </div>`,
    
})
export class AppComponent  {
   pageTitle : string = `Session 7 Assignment1`; 
   userList: any = [
            {name: "Avnesh Shakya",age: "26",  profession:"Employee"},
            {name: "Adam", age: "30", profession: "Employee"},
            {name: "Eve", age: "35", profession: "Employee"},
            {name: "Mohan", age: "25", profession: "Employee"},
            {name: "Sohan", age: "28", profession: "Employee"},
            ]

textcolor="red";
  }



