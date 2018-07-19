import { Component, OnInit } from '@angular/core';
import { ReplenishmentService } from './replenishment.service';

@Component({
  selector: 'app-replenishment',
  templateUrl: './replenishment.component.html',
  styleUrls: ['./replenishment.component.css']
})

export class ReplenishmentComponent implements OnInit {
  replenishment = [];
  
  constructor(private _replenishmentService: ReplenishmentService) { }
  ngOnInit() {
    
      this._replenishmentService.getReplenishment().subscribe(resReplenshmentData => this.replenishment = resReplenshmentData);
  }
}
