import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  //Table  Filler Data
  sizeData = [
    {'name': 'shila Rani', 'phone': 9958313537, 'brand': 'Feather Line', 'size': '45c' },
    {'name': 'shila Rani', 'phone': 9958313537, 'brand': 'Feather Line', 'size': '45c' },
  ]

  constructor() { }

  getSize() {
    return this.sizeData
  } 

  getLength() {
    return this.sizeData.length;
  }
}
