import { Component, OnInit } from '@angular/core';
import { AlarmlistService } from './alarmlist.service';

@Component({
	selector: 'app-alarmlist',
	templateUrl: './alarmlist.component.html',
	styleUrls: ['./alarmlist.component.css']
})
export class AlarmlistComponent implements OnInit {
	p: number[] = [];

	alarmlist = [];
	collection = [];
	collection2 = [];
	interval: any;

	constructor(private _alarmlistService: AlarmlistService) { }

	ngOnInit() {
		this.refreshData();
		this.interval = setInterval(() => {
			this.refreshData();
		}, 2000);
	}

	refreshData() {
		this._alarmlistService.getAlarmlist().subscribe(resAlarmlistData => {
			this.alarmlist = resAlarmlistData;
			console.log("hello alarm");
			console.log(resAlarmlistData);
		}
		);

		for (let i = 1; i <= 100; i++) {
			this.collection.push(`item ${i}`);
		}

		for (let i = 1; i <= 100; i++) {
			this.collection2.push(`item ${i}`);
		}
	}


	ngAfterViewInit() {
		//var Swiper; 

		/*		setTimeout(function(){
		
						var swiper1 = new Swiper('.s1', {
									pagination: '.swiper-pagination1',
									slidesPerView: '6',
									centeredSlides: false,
									paginationClickable: true,
									nextButton: '.swiper-button-next1',
									prevButton: '.swiper-button-prev1',
									spaceBetween: 8,
									autoplay: 0,
									autoplayDisableOnInteraction: false,
									breakpoints: {
										1024: {	slidesPerView: 6, spaceBetween: 8 },
										768: { slidesPerView: 3, spaceBetween: 8 },
										640: { slidesPerView: 1, spaceBetween: 8 },
										320: { slidesPerView: 1, spaceBetween: 8 }
								}
						});
		
					}, 13000);
		*/


	}

}
