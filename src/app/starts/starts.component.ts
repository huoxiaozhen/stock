import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {

  @Input() rating:number=0;

  starts:boolean[];

  constructor() { }

  ngOnInit() {
    // for(let i=0; i< =5;i++){

    // }
    this.starts = [false,false,true,true,true];
  }

}
