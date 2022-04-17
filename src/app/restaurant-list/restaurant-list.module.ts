import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantListComponent } from './restaurant-list.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [RestaurantListComponent],
  exports: [RestaurantListComponent]
})
export class RestaurantListComponentModule {}
