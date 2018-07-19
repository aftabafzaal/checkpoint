import { Component, OnInit } from '@angular/core';
import { CyclecountService } from './cyclecount.service';

@Component({
  selector: 'app-cyclecount',
  templateUrl: './cyclecount.component.html',
  styleUrls: ['./cyclecount.component.css']
})

export class CyclecountComponent implements OnInit {

  cyclecount = [];
  planned = [];
  interval: any;
  constructor(private _cyclecountService: CyclecountService) { }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData() {
    this._cyclecountService.getCyclecount().subscribe(resCyclecountData => this.cyclecount = resCyclecountData);
    this._cyclecountService.getPlanned().subscribe(resPlannedData => {
      this.planned = resPlannedData.plannedAhead.count + resPlannedData.plannedNextDay.count + resPlannedData.plannedToday.count;
    });
  }
}
