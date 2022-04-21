import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantDetailPageRoutingModule } from './restaurant-detail-routing.module';

import { RestaurantDetailPage } from './restaurant-detail.page';
import { ShowRatingComponent } from '../show-rating/show-rating.component';
import { SharedPipesModule } from '../safe.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RestaurantDetailPageRoutingModule,
    SharedPipesModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-hObkD4fYVXSnatnJnAvpQAS9uHzPTvE',
      libraries: ['']
    }),
  ],
  declarations: [RestaurantDetailPage, ShowRatingComponent]
})
export class RestaurantDetailPageModule {}
