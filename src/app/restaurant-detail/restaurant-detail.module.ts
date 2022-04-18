import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantDetailPageRoutingModule } from './restaurant-detail-routing.module';

import { RestaurantDetailPage } from './restaurant-detail.page';
import { ShowRatingComponent } from '../show-rating/show-rating.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RestaurantDetailPageRoutingModule
  ],
  declarations: [RestaurantDetailPage, ShowRatingComponent]
})
export class RestaurantDetailPageModule {}
