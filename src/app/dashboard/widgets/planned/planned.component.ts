import { Component, OnInit } from '@angular/core';
import { PlannedService } from './planned.service';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.component.html',
  styleUrls: ['./planned.component.css']
})

export class PlannedComponent implements OnInit {

  planned = [];
  showControls = true;
  interval: any;
  date;
  todayDate;
  tomorrowDate;
  constructor(private _plannedService: PlannedService) { }
  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData() {
    this._plannedService.getPlanned().subscribe(resPlannedData => {
      this.planned = resPlannedData;
      this.date = new Date();
      this.tomorrowDate = this.date.setDate(this.date.getDate() + 1);
      this.todayDate = this.date.setDate(this.date.getDate() - 1);
      // console.log(this.planned);
    });
  }
}
