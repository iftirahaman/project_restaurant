import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { AgmCoreModule } from '@agm/core';

import { SafePipe } from './safe.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, SafePipe],
  entryComponents: [],
  imports: [BrowserModule,
    IonicStorageModule.forRoot({
    name: '__restaurantDb',
    // eslint-disable-next-line no-underscore-dangle
    driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-hObkD4fYVXSnatnJnAvpQAS9uHzPTvE',
      libraries: ['']
    }), RouterModule.forRoot(routes)]
  }), IonicModule.forRoot(), AppRoutingModule],
  providers: [SocialSharing, EmailComposer,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
