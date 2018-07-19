import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './activities.service';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

    activities = [];
    interval: any;
    p: number = 1;
    constructor(private _activitiesService: ActivitiesService) { }

    ngOnInit() {
        this.refreshData();
        this.interval = setInterval(() => {
            this.refreshData();
        }, 5000);
    }

    refreshData() {
        this._activitiesService.getActivities().subscribe(
            resActivitiesData => {
                this.activities = resActivitiesData;
                console.log('Activities');
                console.log(resActivitiesData);
            }
        );
    }
}
