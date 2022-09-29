import { Component, OnInit } from '@angular/core';
import {ToDoItem} from "../to-do-item";
import {ITEMS} from "../mock-todo-items";

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {
  items = ITEMS;
  toDoItem: ToDoItem = {
    id: 1,
    name: "Learn Angular",
    isComplete: false
  }


  selectedItem!:ToDoItem;
  visibility: boolean = true;

  onSelect(item:ToDoItem) : void {
    this.selectedItem = item;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
