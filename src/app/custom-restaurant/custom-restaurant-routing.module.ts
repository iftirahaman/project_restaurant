import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomRestaurantPage } from './custom-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: CustomRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomRestaurantPageRoutingModule {}
