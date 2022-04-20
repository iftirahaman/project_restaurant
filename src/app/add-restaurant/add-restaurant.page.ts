import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService, Restaurant } from '../services/data.service';
import { StorageService } from '../services/restauraunt/storage.service';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {
  restaurantData = this.restaurantService.getRestaurants();

  constructor(private restaurantService: RestaurantService, private storageService: StorageService, private router: Router) {}

  getRestaurants(): Restaurant[] {
    return this.restaurantService.getRestaurants();
  }

  async addRestaurant(restaurant: Restaurant) {
    restaurant.added = true;
    this.storageService.set(restaurant.id, restaurant);
    // restaurant.added = true;
    this.router.navigate(['']);
    console.log(restaurant);
  }

  directEdit(restaurant: Restaurant){
    this.restaurantService.setNavRestaurant(restaurant);
    this.router.navigate(['/edit-favorite']);
  }

  ngOnInit() {

  }

}
