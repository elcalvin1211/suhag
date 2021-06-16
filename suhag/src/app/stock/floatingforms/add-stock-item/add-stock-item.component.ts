import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../../../services/stock.service'

@Component({
  selector: 'app-add-stock-item',
  templateUrl: './add-stock-item.component.html',
  styleUrls: ['./add-stock-item.component.scss']
})
export class AddStockItemComponent implements OnInit {
  
  dropdown:string = 'none';
  
  constructor(private Router: Router, private StocksService: StockService) { }

  ngOnInit(): void {
  }



  add() {

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
