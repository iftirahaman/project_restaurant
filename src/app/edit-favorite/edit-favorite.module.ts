import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFavoritePageRoutingModule } from './edit-favorite-routing.module';

import { EditFavoritePage } from './edit-favorite.page';
import { RatingComponent } from '../rating/rating.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFavoritePageRoutingModule
  ],
  declarations: [EditFavoritePage,RatingComponent]
})
export class EditFavoritePageModule {}
