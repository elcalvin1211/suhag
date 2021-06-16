import { Injectable, OnInit } from '@angular/core';
import { Stock } from '../shared/model/stock.model';
@Injectable({
  providedIn: 'root'
})
export class StockService{

  lowStock:number = 0; 



  stockTableData: Stock[] = [
    { 'id': 'stock1', 'barcode': '000000', 'cost': 200, 'item': 'FeatherLine', 'category': 'Bra', 'items': 1, 'breakpoint': 2 },
    { 'id': 'stock2', 'barcode': '000001', 'cost': 210, 'item': 'Red Rose', 'category': 'Bra', 'items': 6, 'breakpoint': 3 },
    { 'id': 'stock3', 'barcode': '000002', 'cost': 230, 'item': 'Feather', 'category': 'Bra', 'items': 1, 'breakpoint': 2 },

  ]

  constructor() { }


  //Breakout Low stock Function
  getLowStock(){
    this.lowStock = 0;
    for (let i = 0; i < this.stockTableData.length; i++){
      if (this.stockTableData[i].items <= this.stockTableData[i].breakpoint) {
        this.lowStock++
      }
    }
    return this.lowStock;
  }

  getStockTableData() {
    return this.stockTableData;
  }
}
