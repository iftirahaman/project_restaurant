import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService, Restaurant } from '../services/data.service';
import { StorageService } from '../services/restauraunt/storage.service';
@Component({
  selector: 'app-edit-favorite',
  templateUrl: './edit-favorite.page.html',
  styleUrls: ['./edit-favorite.page.scss'],
})
export class EditFavoritePage implements OnInit {
  restaurant: Restaurant;
  rate: any;

  constructor(private restaurantService: RestaurantService, private storageService: StorageService, private route: Router) {
    this.restaurant = this.restaurantService.getNavRestaurant();
    this.rate = window.localStorage.getItem("rate")
  }

  addRestaurant(restaurant: Restaurant, description: string) {
    restaurant.added = true;
    restaurant.rating = parseInt(this.rate);
    restaurant.description = description;
    this.storageService.set(restaurant.id, restaurant);
  }

  ngOnInit() {}

}
