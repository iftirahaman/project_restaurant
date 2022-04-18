import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../services/data.service';
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {

  restaurant: any;

  constructor(
    private restaurantService: RestaurantService
    ) { 
    this.restaurant = this.restaurantService.getNavRestaurant()
  }

  ngOnInit() {
  }

}
