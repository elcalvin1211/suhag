import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from '../../../shared/model/stock.model';


@Component({
  selector: 'app-stocktable',
  templateUrl: './stocktable.component.html',
  styleUrls: ['./stocktable.component.scss']
})
export class StocktableComponent implements OnInit {

  //Variables
  stockTableData!: Stock[];
  selected: string[] = [];
  oldColorOfTable:string = 'tomato';


  constructor(private StockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.stockTableData = this.StockService.getStockTableData();    
  }


  selectStock(data: string) {
    //Get HTML Elements based on ID
    const elm = document.getElementsByClassName(data) as HTMLCollectionOf<HTMLElement>; 
    const checkBox = document.getElementById(data) as HTMLInputElement; 

    checkBox.checked = !checkBox.checked


    // Select Item
    if (checkBox?.checked == true) {
      this.selected.push(data);
      elm[0].style.backgroundColor = '#56C097';
    } 

    //Deselect Item//
      else if(checkBox?.checked == false) {
        let index = (<HTMLTableRowElement>elm[0]).rowIndex;
        ////Change color based on Odd and even positioning
        if(index%2 == 0)
          elm[0].style.backgroundColor = 'white';
          else {
            elm[0].style.backgroundColor = '#f2f2f2';
          }

          ////Remove Selected Stock from Array
          this.selected.splice(this.selected.indexOf(data), 1);          
      }
  }

  newStockItem() {
    this.router.navigate(['stock/addstock']);
  }


  editStockItem(item:Stock) {
    let index = String(this.stockTableData.indexOf(item));
    sessionStorage.setItem('editItem', index);
    this.router.navigate(['stock/editstock']);
  }

  deleteStockItem(item:Stock) {
    //Remove Item From local Array
    let index = this.stockTableData.indexOf(item);
    this.stockTableData.splice(index, 1);
  }


  
}
