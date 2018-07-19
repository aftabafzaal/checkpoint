import { Component, OnInit } from '@angular/core';
import { OutofstockService } from './outofstock.service';

@Component({
  selector: 'app-outofstock',
  templateUrl: './outofstock.component.html',
  styleUrls: ['./outofstock.component.css']
})
export class OutofstockComponent implements OnInit {

 /* outofstock = []; */
  constructor(private _outofstockService: OutofstockService) { }
  ngOnInit() {
  /*
      this._outofstockService.getOutofstock().subscribe(resOutofstockData => this.outofstock = resOutofstockData);
      */
  }
  

}