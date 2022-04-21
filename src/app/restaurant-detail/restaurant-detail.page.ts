import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Restaurant, RestaurantService } from '../services/data.service';
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {

  restaurant: Restaurant;
  title = 'Restaurant Navigator';
  latitude: number;
  longitude: number;
  zoom: number;

  constructor(private restaurantService: RestaurantService, private emailComposer: EmailComposer, private socialSharing: SocialSharing) {
    this.restaurant = this.restaurantService.getNavRestaurant();
  }

  ngOnInit() {
    this.setCurrentLocation();
  }

  share(name: string, address: string){
    this.socialSharing.share(
      'Come to ' + name + ', at ' + address
    ).then(() =>{

    }).catch(e=>{

    });
  };

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
