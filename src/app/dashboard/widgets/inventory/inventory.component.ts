import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  public ChartPnt = 77;

  inventory = [];
  public total;
  public chartData;
  interval: any;

  constructor(private _inventoryService: InventoryService) { }

  //public chartType: string = 'doughnut';
  //public chartLabels: Array<string> = ['',''];
  //public chartData: Array<number> = [0,0];

  // public chartOptions: any = {
  //   pieceLabel: {
  //     render: function (args) {
  //       const label = args.label,
  //             value = args.value;
  //       return label + ': ' + value;
  //     }
  //   }
  // }
  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData() {
    this._inventoryService.getInventory().subscribe(data => {
      this.inventory = data;
      this.total = data[0].count + data[1].count;
      this.chartData = data[0].count / this.total * 100; // 0 = Sales, 1=Stock
    }); // simply signal for the service to update its data stream
  }

}

