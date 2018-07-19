import { Component } from '@angular/core';

import { ReplenishmentService } from './dashboard/widgets/replenishment/replenishment.service';
import { ApprovalService } from './dashboard/widgets/approval/approval.service';
import { PlannedService } from './dashboard/widgets/planned/planned.service';
import { InventoryService } from './dashboard/widgets/inventory/inventory.service';
import { CyclecountService } from './dashboard/widgets/cyclecount/cyclecount.service';
import { AlarmsService } from './dashboard/widgets/alarms/alarms.service';
import { VisitorService } from './dashboard/widgets/visitor/visitor.service';
import { ActiveccService } from './dashboard/widgets/activecc/activecc.service';
import { ActivitiesService } from './dashboard/widgets/activities/activities.service';
import { OutofstockService } from './dashboard/widgets/outofstock/outofstock.service';
import { OutofshelfService } from './dashboard/widgets/outofshelf/outofshelf.service';
import { AlarmlistService } from './dashboard/widgets/alarmlist/alarmlist.service';
import { ActivitiesPageService } from './dashboard/activities-page/activities-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ApprovalService, ReplenishmentService, PlannedService, InventoryService, CyclecountService, AlarmsService, VisitorService, ActiveccService, ActivitiesService, OutofstockService, OutofshelfService, AlarmlistService, ActivitiesPageService ]
})
export class AppComponent {
  title = 'app';
}