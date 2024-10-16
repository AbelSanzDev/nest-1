import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'toyoya',
      model: '100000',
    },
    {
      id: uuid(),
      brand: 'nissan',
      model: '1000',
    },
    {
      id: uuid(),
      brand: 'bmw',
      model: '1000100',
    },
    {
      id: uuid(),
      brand: 'mercedes',
      model: '100000010',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public getCarById(id: string) {
    const car = this.cars.find((auto) => auto.id === id);
    if (!car) {
      throw new NotFoundException(`Cat with id ${id} not found`); //?are error exceptions like 400 404 500 etc
    }
    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const newCar = { id: uuid(), ...createCarDto };
    const same = this.cars.find((car) => car.model === createCarDto.model);
    if (same)
      throw new ForbiddenException(
        `the ${createCarDto.model} is  in the database`,
      );
    this.cars.push(newCar);
    return newCar;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carFond = this.getCarById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carFond = {
          ...this.getCarById,
          ...updateCarDto,
          id,
        };
        return carFond;
      }
      return car;
    });
    return carFond;
  }

  public delete(id: string) {
    this.getCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    //?Its not necessary put a return due, nest just send and undefined
  }
}
