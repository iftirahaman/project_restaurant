import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomRestaurantPageRoutingModule } from './custom-restaurant-routing.module';

import { CustomRestaurantPage } from './custom-restaurant.page';
import { RatingComponent } from '../rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomRestaurantPageRoutingModule
  ],
  declarations: [CustomRestaurantPage, RatingComponent]
})
export class CustomRestaurantPageModule {}
