import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(public readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  //?para poder hacer la peticion get y que pueda recibir parametros
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    //?{ParseIntPipe is a pipe that allow make validations in out code without if
    //?EL @Param se utiliza para poder decorar la variable id y que sea como param.}
    return this.carsService.getCarById(id);
  }
  @Post()
  setCar(@Body() body: CreateCarDto) {
    return this.carsService.create(body);
  }
  @Patch(':id')
  updateCar(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carsService.update(id, updateCarDto);
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
