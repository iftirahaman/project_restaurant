import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-rating',
  templateUrl: './show-rating.component.html',
  styleUrls: ['./show-rating.component.scss'],
})
export class ShowRatingComponent implements OnInit {
  @Input() rating: number;
  constructor() { }

  ngOnInit() {}
  
  getColor(index: number) {
    if(this.isAboveRating(index)){
      return COLORS.GREY
    }
    switch(this.rating){
      case 1:
      case 2:
        return COLORS.RED
      case 3:
        return COLORS.YELLOW
      case 4:
      case 5:
        return COLORS.GREEN
      default:
        return COLORS.GREY
    }
  }

  isAboveRating(index: number): boolean {
    return index > this.rating
  }
}
enum COLORS{
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  RED = "#DD2C00"
}