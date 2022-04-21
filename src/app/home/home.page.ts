import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant, RestaurantService } from '../services/data.service';
import { StorageService } from '../services/restauraunt/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  restaurants = this.restaurantService.getRestaurants();
  addedRestaurants = [];

  constructor(private route: Router, private restaurantService: RestaurantService,private storageService: StorageService) {
    console.log(this.storageService.getAllKeys())
    for (const restaurant of this.restaurants) {
      if (restaurant.added) {
        this.addedRestaurants.push(restaurant);
      }
    }
  }
  ngOnInit() {
  }

  aboutPage() {
    this.route.navigate(['/home']);
  }

  directEdit(restaurant: Restaurant){
    this.restaurantService.setNavRestaurant(restaurant);
    this.route.navigate(['/edit-favorite']);
  }

  directDetail(restaurant: Restaurant){
    this.restaurantService.setNavRestaurant(restaurant);
    this.route.navigate(['/restaurant-detail']);
  }

}
