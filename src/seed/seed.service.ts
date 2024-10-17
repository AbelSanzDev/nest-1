import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brads.seed';

@Injectable()
export class SeedService {
  constructor(
    public readonly carService: CarsService,
    public readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    this.carService.fillCarWithSeedData(CARS_SEED);
    this.brandsService.fillBrandWithSeedData(BRANDS_SEED);
    return 'seed executed';
  }
}
