import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent implements OnInit {
  @Input() isToBeCounted:boolean;
  @Input() initialLikes:number;
  @Output('counter') counter = new EventEmitter();
  newLikeCount:number;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.initialLikes += (this.isToBeCounted) ? -1 : 1;
    this.isToBeCounted = !this.isToBeCounted;
    this.counter.emit({newLikeValue:this.isToBeCounted,newLikesCount:this.initialLikes})
  }
  
}
export interface LikeCounterState{
  newLikeValue:boolean,
  newLikesCount:number
}
