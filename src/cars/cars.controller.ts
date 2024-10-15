import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
  getCarById(@Param('id', ParseIntPipe) id: number) {
    //?{ParseIntPipe is a pipe that allow make validations in out code without if
    //?EL @Param se utiliza para poder decorar la variable id y que sea como param.}
    return this.carsService.getCarById(+id);
  }
  @Post()
  setCar(@Body() body: any) {
    return {
      message: body,
    };
  }
  @Patch(':id')
  updateCar(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return {
      body,
      id,
    };
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
