import { Component, OnInit } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { RestaurantService, Restaurant } from '../services/data.service';
import { StorageService } from '../services/restauraunt/storage.service';
@Component({
  selector: 'app-edit-favorite',
  templateUrl: './edit-favorite.page.html',
  styleUrls: ['./edit-favorite.page.scss'],
})
export class EditFavoritePage implements OnInit {

  restaurant: any;
  

  constructor(
    private restaurantService: RestaurantService,
    private storageService: StorageService
  ) { 
    this.restaurant = this.restaurantService.getNavRestaurant()
  }

  async addRestaurant(restaurant: Restaurant, description: string, rating: number) {
    restaurant.added = true;
    restaurant.rating = rating;
    restaurant.description = description;
    this.storageService.set(restaurant.id, restaurant);
    console.log(restaurant);
  }

  ngOnInit() {
  }

}
