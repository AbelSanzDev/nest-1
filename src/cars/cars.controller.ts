import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['toyota', 'mercedes'];
  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id') //?para poder hacer la peticion get y que pueda recibir parametros
  getCarById(@Param('id') id) {
    //?EL @Param se utiliza para poder decorar la variable id y que sea como param.
    const number = Number(id);
    if (!number) {
      return {
        message: 'this is not a number',
      };
    }
    const car = this.cars[+id];
    if (!car) return { message: 'No car id' };
    return {
      car: this.cars[+id],
    };
  }
}
