import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../../../shared/model/stock.model';
import { StockService } from '../../../services/stock.service'


@Component({
  selector: 'app-edit-stock-item',
  templateUrl: './edit-stock-item.component.html',
  styleUrls: ['./edit-stock-item.component.scss']
})
export class EditStockItemComponent implements OnInit {
  
  item!: Stock;
  dropdown:string = 'none';
  index: number = 0;

  constructor(private Router: Router, private StockService: StockService) { }

  ngOnInit(): void {
    //Get Selected item to edit
    this.index = Number(sessionStorage.getItem("editItem"));
    this.item = this.StockService.getStockTableData()[this.index];
  }

  search() {
    if(this.dropdown == 'none') {
      this.dropdown = 'block';
    } else {
      this.dropdown = 'none'
    }
  }


  closeFloatingForm() {
    this.Router.navigate(['/stock']);
  }

}
