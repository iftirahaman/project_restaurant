import { Component, OnInit } from '@angular/core';
import { RestaurantService, Restaurant } from '../services/data.service';
import { StorageService } from '../services/restauraunt/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {
  restaurantData = this.restaurantService.getRestaurants();

  constructor(private route: Router,private restaurantService: RestaurantService) {}

  getRestaurants(): Restaurant[] {
    return this.restaurantService.getRestaurants();
  }

  

  directEdit(restaurant: Restaurant){
    this.restaurantService.setNavRestaurant(restaurant);
    this.route.navigate(['/edit-favorite']);
  }

  ngOnInit() {

  }

}
