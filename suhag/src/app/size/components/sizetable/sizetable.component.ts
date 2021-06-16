import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/shared/model/size.model';
import { SizeService } from 'src/app/services/size.service';

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
    console.log(this.sizeData);
    
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
