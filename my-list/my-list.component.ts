import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models/list.model';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  @Input() myList! : List;
  
  ngOnInit(): void {
  }

}
