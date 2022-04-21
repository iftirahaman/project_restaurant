import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../services/restauraunt/storage.service';
import { Restaurant } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-restaurant',
  templateUrl: './custom-restaurant.page.html',
  styleUrls: ['./custom-restaurant.page.scss'],
})
export class CustomRestaurantPage implements OnInit {
  @Input()
  name: string;

  @Input()
  address: string;

  @Input()
  phoneNumber: string;

  @Input()
  tags: [];

  @Input()
  description: string;

  restaurant: Restaurant = {
    id: '',
    name: '',
    address: '',
    phoneNumber: '',
    description: '',
    tags: [''],
    rating: 0,
    added: false,
    imgLink: '',
    mapLink: '',
  };


  constructor(private storageService: StorageService, private route: Router,) { }

  async addRestaurant(name: string,address: string, phoneNumber: string,
    description: string, rating: number, tags: (string) []) {
    this.storageService.getLength().then(val => {
      this.restaurant.id = (val + 21).toString();
    }).then ( () => {
    this.restaurant.name = name;
    this.restaurant.address = address;
    this.restaurant.phoneNumber = phoneNumber;
    this.restaurant.tags = tags;
    this.restaurant.added = true;
    this.restaurant.rating = rating;
    this.restaurant.description = description;
    this.storageService.set(this.restaurant.id, this.restaurant);
    console.log(this.restaurant);
    this.route.navigate(['/home']);
    });
  }

  ngOnInit() {

  }

}
