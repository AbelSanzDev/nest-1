import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'toyoya',
      price: '100000',
    },
    {
      id: 2,
      brand: 'nissan',
      price: '1000',
    },
    {
      id: 3,
      brand: 'bmw',
      price: '1000100',
    },
    {
      id: 4,
      brand: 'mercedes',
      price: '100000010',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public getCarById(id: number) {
    const car = this.cars.find((auto) => auto.id === id);
    if (!car) {
      throw new NotFoundException(`Cat with id ${id} not found`); //?are error exceptions like 400 404 500 etc
    }
    return car;
  }
}
