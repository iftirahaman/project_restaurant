import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './data.service';

describe('DataService', () => {
  let restaurantService: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    restaurantService = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(restaurantService).toBeTruthy();
  });
});
