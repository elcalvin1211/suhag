import { Component, OnInit } from '@angular/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-sizedash',
  templateUrl: './sizedash.component.html',
  styleUrls: ['./sizedash.component.scss']
})
export class SizedashComponent implements OnInit {

  dataLength = this.sizeService.getLength();
  constructor(private sizeService:SizeService) { }

  ngOnInit(): void {
  }

}
