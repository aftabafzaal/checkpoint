import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ActivitiesPageService } from './activities-page.service';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css']
})
export class ActivitiesPageComponent implements OnInit {

  constructor(private _activitiesPageService: ActivitiesPageService) { }
  activitiesData = [];
  day;
  day1;
  day2;
  day3;
  day4;
  day5;
  day6;
  day7;
  ngOnInit() {
    this._activitiesPageService.getActivitiesData().subscribe(resActivitiesData => {
      this.activitiesData = resActivitiesData;
      console.log(resActivitiesData);
    });
    this.day = new Date();
    this.day1 = this.day.setDate(this.day.getDate() - 2);
    this.day2 = this.day.setDate(this.day.getDate() - 1);
    this.day3 = this.day.setDate(this.day.getDate() - 1);
    this.day4 = this.day.setDate(this.day.getDate() - 1);
    this.day5 = this.day.setDate(this.day.getDate() - 1);
    this.day6 = this.day.setDate(this.day.getDate() - 1);
    console.log(this.day1);
    console.log(this.day2);
  }



  ngAfterViewInit() {
    
    setTimeout(function(){ 
      //var jQuery:any ="";
          jQuery('.btn-collapse').click(function(de){
          //e.preventDefault();
            jQuery(this).closest(".colapsegroup").children(".collapse").toggleClass('in');
            jQuery(this).toggleClass("collapsed");
          });

    }, 3000);
      
    }

}
