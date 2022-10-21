import { Component, OnInit } from '@angular/core';
import { List } from './models/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myDoLists! : List[];

  ngOnInit() {
    this.myDoLists = [{
      toDoName: 'dormir',
      createdDate: new Date(),
      numberList : 1
    },
    {
      toDoName: 'réviser',
      createdDate: new Date(),
      numberList : 1
    },
    {
      toDoName: 'préparer un rendez-vous',
      createdDate: new Date(),
      numberList : 1
    },
    {
      toDoName: 'apéro',
      createdDate: new Date(),
      numberList : 1
    }]
}
}
