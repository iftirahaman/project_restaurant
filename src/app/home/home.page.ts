import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant, RestaurantService } from '../services/data.service';
import { StorageService } from '../services/restauraunt/storage.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  restaurants = this.restaurantService.getRestaurants();
  public searchField: FormControl;
  addedRestaurants = [];

  constructor(private route: Router, private restaurantService: RestaurantService, private storageService: StorageService) {
    this.searchField = new FormControl('');
  }

  async ngOnInit() {
    await this.storageService.getAllKeys().then(value => {
      if (value.length > 0) {
        for (const v of value) {
          this.storageService.get(v).then(val => {
            if (val.added) {
              this.addedRestaurants.push(val);
            }
          });
        }
      }
    });
  }

  aboutPage() {
    this.route.navigate(['/home']);
  }

  deleteRestaurant(restaurant: Restaurant){
    restaurant.added = false;
    this.storageService.set(restaurant.id, restaurant);
    this.storageService.remove(restaurant.id);
    window.location.reload();
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
