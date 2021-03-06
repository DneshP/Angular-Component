import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input('isFavourite') isSelected:boolean;
  @Output('state') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }

}
export interface FavouriteChangedState {
  newValue: boolean
}