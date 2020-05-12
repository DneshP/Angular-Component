import { Component } from '@angular/core';
import { FavouriteChangedState } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title:"Favourite",
    isFavourite:false
    }
  onFavouriteChange(eventArgs: FavouriteChangedState){
    console.log('Favourite is Selected',eventArgs);
  }  
}
