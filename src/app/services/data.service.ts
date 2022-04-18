import { Injectable } from '@angular/core';
import { debugHardcodedRestaurantData } from './data/restaurant-data';

export interface Restaurant {
  name: string;
  address: string;
  phoneNumber: string;
  description: string;
  tags: (string) [];
  rating: number;
  added: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  public restaurants: Restaurant[] = debugHardcodedRestaurantData;

  constructor() { }

  public getRestaurants(): Restaurant[]{
    return  this.restaurants;
  }

  public getRestaurantByName(name: string): Restaurant{
    return this.restaurants[name];
  }

  public getRestaurantByTag(tags: string): Restaurant{
    return this.restaurants[tags];
  }
}
