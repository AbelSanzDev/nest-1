import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsService, BrandsService],
})
export class SeedModule {}
