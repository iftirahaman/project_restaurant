import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/data.service';

@Component({
  selector: 'app-edit-favorite',
  templateUrl: './edit-favorite.page.html',
  styleUrls: ['./edit-favorite.page.scss'],
})
export class EditFavoritePage implements OnInit {

  restaurant: any;

  constructor(
    private restaurantService: RestaurantService
  ) { 
    this.restaurant = this.restaurantService.getNavRestaurant()
    console.log(this.restaurant)
  }

  ngOnInit() {
  }

}
