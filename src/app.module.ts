import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule, TestModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
