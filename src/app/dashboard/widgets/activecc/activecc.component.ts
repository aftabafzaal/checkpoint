import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ActiveccService } from './activecc.service';
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-activecc',
  templateUrl: './activecc.component.html',
  styleUrls: ['./activecc.component.css']
})

export class ActiveccComponent implements OnInit {

  public demo_team = "5";
  public ChartPnt = "40.8";
  fixedTimezone = '2015-06-15T09:03:01+0900';

  activecc = [];
  interval: any;

  constructor(private _activeccService: ActiveccService) { }
  
  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData() {
    this._activeccService.getActivecc().subscribe(resActiveccData => {
      this.activecc = resActiveccData;
      console.log(resActiveccData);
    });
  }

}