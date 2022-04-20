import { Component, OnInit } from '@angular/core';
import { RestaurantService, Restaurant } from '../services/data.service';
import { StorageService } from '../services/restauraunt/storage.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {
  restaurantData = this.restaurantService.getRestaurants();

  constructor(private restaurantService: RestaurantService, private storageService: StorageService) {}

  getRestaurants(): Restaurant[] {
    return this.restaurantService.getRestaurants();
  }

  async addRestaurant(restaurant: Restaurant) {
    // restaurant.added = true;
    console.log(restaurant);
  }

  ngOnInit() {

  }

}
