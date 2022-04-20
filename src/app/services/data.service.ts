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
  imgLink: string;
  mapLink: string;
}

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  public restaurants: Restaurant[] = debugHardcodedRestaurantData;
  public navRestaurant: any;

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

  public setNavRestaurant(restaurant){
    this.navRestaurant = restaurant
  }

  public getNavRestaurant(){
    return this.navRestaurant
  }

  // public changeAdded(added: boolean, name: string): Restaurant{
  //   this.restaurants[name].added = added
  //   return this.restaurants[name].added
  // }
}
