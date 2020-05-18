import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponentComponent } from './like-component/like-component.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    LikeComponentComponent,
    InputFormatDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
