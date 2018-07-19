import { Component, OnInit } from '@angular/core';
import { AlarmsService } from './alarms.service';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})

export class AlarmsComponent implements OnInit {

  alarms = [];
  alerts = [];
  interval: any;
  constructor(private _alarmsService: AlarmsService) { }
  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData() {
    this._alarmsService.getAlarms().subscribe(resAlarmsData => { this.alarms = resAlarmsData; console.log(resAlarmsData); });
    this._alarmsService.getAlertsTheft().subscribe(resAlertsTheftData => { this.alerts = resAlertsTheftData; });
  }

}

