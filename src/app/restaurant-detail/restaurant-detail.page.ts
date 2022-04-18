import { Component, Input, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { RestaurantService } from '../services/data.service';
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {

  restaurant: any;

  constructor(
    private restaurantService: RestaurantService,
    private emailComposer: EmailComposer,
    private socialSharing: SocialSharing
    ) { 
    this.restaurant = this.restaurantService.getNavRestaurant()
  }

  shareViaEmail(name, address){
    let email={
      to: 'mybestfriend@friend.com',
      subject: name+ ' is the best restaurant!',
      body: 'You have to come to '+address+', and try this restaurant!'
    }

    this.emailComposer.open(email);
  };

  shareViaTwitter(name, address){
    this.socialSharing.shareViaTwitter(
      name, address
    ).then(() =>{

    }).catch(e=>{

    })
  };

  shareViaFacebook(name, address){
    this.socialSharing.shareViaFacebook(
      name, address
    ).then(() =>{

    }).catch(e=>{

    })
  };

  ngOnInit() {
  }

  

  

}
