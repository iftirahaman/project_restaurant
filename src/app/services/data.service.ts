import { Injectable } from '@angular/core';

export interface Restaurant{
  name: string;
  address: string;
  phone_number: string;
  description: string;
  tag: string;
  rating: number;
  added: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public restaurants: Restaurant[] = [
    {
      name: 'Popeyes Louisiana Kitchen',
      address: '4841 Yonge St Unit# 206, Toronto, ON M2N 5Y7',
      phone_number: '(647) 343-5262',
      description: 'Louisiana-inspired fast-food chain known for its spicy fried chicken, biscuits & sides.',
      tag: 'Chicken',
      rating: 3,
      added: false
    },
    {
      name: 'Big Mao',
      address: '5519 Yonge St, North York, ON M2N 5S3',
      phone_number: '(416) 551-6686',
      description: 'Self service restaurant',
      tag: 'Chinese',
      rating: 4,
      added: false
    },
    {
      name: 'EAT BKK Thai Kitchen',
      address: '4704 Yonge St, North York, ON M2N 5M4',
      phone_number: '(647) 352-8989',
      description: 'The traditional flavors of Thailand appear at this casual chain dining room with a funky vibe.',
      tag: 'Thai',
      rating: 4,
      added: false
    },
    {
      name: 'TOKYO GRILL',
      address: '5175 Yonge St, North York, ON M2N 5P5',
      phone_number: '(647) 748-6700',
      description: 'Japanese restaurant',
      tag: 'Japanese',
      rating: 4,
      added: false
    },
  ]

  constructor() { }

  public getRestaurants(): Restaurant[]{
    return  this.restaurants;
  }

  public getRestaurantByName(name: string): Restaurant{
    return this.restaurants[name]
  }

  public getRestaurantByTag(tags: string): Restaurant{
    return this.restaurants[tags]
  }

}
