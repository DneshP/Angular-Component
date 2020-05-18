import { Component } from '@angular/core';
import { FavouriteChangedState } from './favourite/favourite.component';
import{ LikeCounterState } from './like-component/like-component.component'
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
  tweet={
      title:"Like Counter",
      isCounted:true,
      count:20
    }
    LikeNumber:number = this.tweet.count;
  onFavouriteChange(eventArgs: FavouriteChangedState){
    console.log('Favourite is Selected',eventArgs);
  }  
  onIncrementRequest(likeArgs:LikeCounterState ){
    console.log("Like Status",likeArgs);
    this.LikeNumber=likeArgs.newLikesCount;
  }
}
