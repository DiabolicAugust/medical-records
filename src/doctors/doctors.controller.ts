import { Body, Controller, Get, Post } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post('/specialization')
  async createSpecialization(@Body('name') name: string) {
    return this.doctorsService.createSpecialization(name);
  }

  @Get('/specialization')
  async getSpecialization() {
    return this.doctorsService.getSpecializations();
  }
}
