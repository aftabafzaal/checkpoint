import { Component, OnInit } from '@angular/core';
import { OutofshelfService } from './outofshelf.service';

@Component({
  selector: 'app-outofshelf',
  templateUrl: './outofshelf.component.html',
  styleUrls: ['./outofshelf.component.css']
})

export class OutofshelfComponent implements OnInit {

  outofshelf = [];
  constructor(private _outofshelfService: OutofshelfService) { }
  ngOnInit() {
    /*  this._outofshelfService.getOutofshelf().subscribe(resOutofshelfData => this.outofshelf = resOutofshelfData); */
  }
  
  
}