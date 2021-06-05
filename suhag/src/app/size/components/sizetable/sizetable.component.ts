import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/model/size.model';
import { SizeService } from 'src/app/size.service';

@Component({
  selector: 'app-sizetable',
  templateUrl: './sizetable.component.html',
  styleUrls: ['./sizetable.component.scss']
})
export class SizetableComponent implements OnInit {

  sizeData!: Size[];

  constructor( private sizeService: SizeService) { }

  ngOnInit(): void {
    this.sizeData = this.sizeService.getSize();
  }

  //Service Functions



  //Functions
  editSize() {
    alert('Edit Size?')
  }

  deleteSize(data:any) {
    alert('Delete?')
    console.table(data); 
  }



}
