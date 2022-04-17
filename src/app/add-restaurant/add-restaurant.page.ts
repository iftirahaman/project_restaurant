import { Component, OnInit } from '@angular/core';
import { DataService, Restaurant } from '../services/data.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getRestaurants(): Restaurant[] {
    return this.data.getRestaurants();
  }

  ngOnInit() {
  }

}
