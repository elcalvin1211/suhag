import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocktable',
  templateUrl: './stocktable.component.html',
  styleUrls: ['./stocktable.component.scss']
})
export class StocktableComponent implements OnInit {

  //Table  Filler Data
  tableData = [
    {'brand': 'FeatherLine', 'size': '34c', 'items': 15, 'breakpoint': 2 },
    {'brand': 'Red Rose', 'size': '32D', 'items': 12, 'breakpoint': 3 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  newStockItem() {
    alert('Item is ready to be made!');
  }

  editStockItem() {
    console.log('Edit Item');
  }

  deleteStockItem() {
    console.log('Delete Items');
  }

}
