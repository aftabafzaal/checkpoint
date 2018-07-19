import { Component, OnInit } from '@angular/core';
import { ApprovalService } from './approval.service';


@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})


export class ApprovalComponent implements OnInit {
  approval = [];
  statusCode: number;
  //jokes: Object[];
  showControls = true;
  interval: any;
  constructor(private _approvalService: ApprovalService) {
    // this.jokes = [
    //   {
    //     setup: "What did the cheese say when it looked in the mirror?",
    //     punchline: "Hello-Me (Halloumi)"
    //   },
    //   {
    //     setup: "What kind of cheese do you use to disguise a small horse?",
    //     punchline: "Mask-a-pony (Mascarpone)"
    //   },
    //   {
    //     setup: "A kid threw a lump of cheddar at me",
    //     punchline: "I thought ‘That’s not very mature’"
    //   },
    // ];
  }
  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
  }

  refreshData() {
    this._approvalService.getApproval().subscribe(resApprovalData => {
      this.approval = resApprovalData;
      // console.log(resApprovalData);
    });
  }

  approve(ccId): void {
    console.log('submit');
    console.log(ccId);
    this._approvalService.update(ccId).subscribe(successCode => {
      this.statusCode = successCode;
      console.log(successCode);
      if (successCode) {
        this.reload();
      }
    });

  }
  reload(): void {
    setTimeout('window.location.reload(true)', '1000');
  }

}