import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'app-stockdash',
  templateUrl: './stockdash.component.html',
  styleUrls: ['./stockdash.component.scss']
})
export class StockdashComponent implements OnInit {

  lowStock:number = 0;

  constructor(private StockService: StockService ) { }

  ngOnInit(): void {
    this.lowStock = this.StockService.getLowStock();
  }

}
