import { Component, OnInit } from '@angular/core';
import { VisitorService } from './visitor.service';
//anotherfile.ts that refers to global constants
import { GlobalVariable } from '../../../globals';


@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  //template: ` ddd dsd + ${GlobalVariable.BASE_API_URL} as `,
  styleUrls: ['./visitor.component.css']
})

export class VisitorComponent implements OnInit {

  visitor = [];
  currentOccupancy;
  warningThreshold;
  occupancyMaxCount;
  calculatedOccupanyRate;
  interval: any;
  constructor(private _visitorService: VisitorService) { }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData() {
    this._visitorService.getVisitor().subscribe(resVisitorData => {
      this.visitor = resVisitorData;
      this.currentOccupancy = resVisitorData.kpidata[8].kpi_value;
      this.warningThreshold = resVisitorData.store_occupancy_settings["0"].warning_threshold;
      this.occupancyMaxCount = resVisitorData.store_occupancy_settings["0"].occupancy_max_count;
      this.calculatedOccupanyRate = (this.currentOccupancy / this.occupancyMaxCount) * 100;
      // console.log(this.visitor);
      // console.log(this.currentOccupancy);
      // console.log(this.warningThreshold);
      // console.log(this.occupancyMaxCount);
      // console.log(this.calculatedOccupanyRate + '%');
    });
  }

}