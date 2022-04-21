import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/restauraunt/storage.service';
import { Restaurant } from '../services/data.service';
@Component({
  selector: 'app-custom-restaurant',
  templateUrl: './custom-restaurant.page.html',
  styleUrls: ['./custom-restaurant.page.scss'],
})
export class CustomRestaurantPage implements OnInit {
  restaurant: any;

  constructor(private storageService: StorageService) { }

  async addRestaurant(restaurant: Restaurant,name: string,address: string,phoneNumber:string, description:string, rating:number, tags:(string) []) {
    let key = this.storageService.getAllKeys.length + 21
    restaurant.name = name;
    restaurant.address = address;
    restaurant.phoneNumber = phoneNumber;
    restaurant.tags = tags;
    restaurant.added = true;
    restaurant.rating = rating;
    restaurant.description = description
    this.storageService.set(key.toString(), restaurant)
    console.log(restaurant);
  }

  ngOnInit() {
  }

}
