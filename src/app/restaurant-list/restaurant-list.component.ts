import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../services/data.service'

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  @Input() restaurant: Restaurant
  constructor() { }

  ngOnInit() {}
  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
