import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(public readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  //?para poder hacer la peticion get y que pueda recibir parametros
  getCarById(@Param('id') id) {
    //?EL @Param se utiliza para poder decorar la variable id y que sea como param.
    const idn = Number(id);
    if (!idn) return { message: 'id not valid' };
    return this.carsService.getCarById(+id);
  }
}
