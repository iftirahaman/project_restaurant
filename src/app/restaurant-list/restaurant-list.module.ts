import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantListComponent } from './restaurant-list.component';

@NgModule({
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, IonicModule, RouterModule],
  declarations: [RestaurantListComponent],
  exports: [RestaurantListComponent]
})
export class RestaurantListComponentModule {}
