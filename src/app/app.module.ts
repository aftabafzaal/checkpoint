import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"; //new
import {HttpModule} from "@angular/http"; //new
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ReplenishmentComponent } from './dashboard/widgets/replenishment/replenishment.component';
import { PlannedComponent } from './dashboard/widgets/planned/planned.component';
import { ApprovalComponent } from './dashboard/widgets/approval/approval.component';
import { InventoryComponent } from './dashboard/widgets/inventory/inventory.component';
import { CyclecountComponent } from './dashboard/widgets/cyclecount/cyclecount.component';
import { AlarmsComponent } from './dashboard/widgets/alarms/alarms.component';
import { VisitorComponent } from './dashboard/widgets/visitor/visitor.component';
import { ActiveccComponent } from './dashboard/widgets/activecc/activecc.component';
import { ActivitiesComponent } from './dashboard/widgets/activities/activities.component';
import { OutofstockComponent } from './dashboard/widgets/outofstock/outofstock.component';
import { OutofshelfComponent } from './dashboard/widgets/outofshelf/outofshelf.component';
import { AlarmlistComponent } from './dashboard/widgets/alarmlist/alarmlist.component';
import { ChartsModule } from 'ng2-charts';

import { OverviewComponent } from './dashboard/overview/overview.component';
import { ActivitiesPageComponent } from './dashboard/activities-page/activities-page.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { ColsetComponent } from './home/colset/colset.component';
import { HeaderDashboardComponent } from './dashboard/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from './dashboard/footer-dashboard/footer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ReplenishmentComponent,
    PlannedComponent,
    ApprovalComponent,
    InventoryComponent,
    CyclecountComponent,
    AlarmsComponent,
    VisitorComponent,
    ActiveccComponent,
    ActivitiesComponent,
    OutofstockComponent,
    OutofshelfComponent,
    AlarmlistComponent,
    OverviewComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ColsetComponent,
    ActivitiesPageComponent,
    HeaderDashboardComponent,
    FooterDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AppRoutingModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

