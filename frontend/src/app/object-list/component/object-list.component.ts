import { Component } from '@angular/core';

@Component({
  selector: 'object-list',
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss'
})

export class ObjectListComponent {
  public Object = Object;
  public redirectTo(id:number) : void {}
}

export const object: Object[] = [
  {
    title:'perviy',
    content: '1Lorem ipsum',
    id: 1
  },
  {
    title:'vtoroy',
    content: '2Lorem ipsum',
    id: 2
  },
  {
    title:'tretiy',
    content: '3Lorem ipsum',
    id: 3
  },
  {
    title:'chetvertiy',
    content: '4Lorem ipsum',
    id: 4
  },
  {
    title:'pyatyi',
    content: '5Lorem ipsum',
    id: 5
  }
]

export interface Object {
  title: string;
  content: string;
  id: number;
}

