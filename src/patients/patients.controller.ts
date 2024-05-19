import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { AllExceptionsFilter } from '../filters/exeptions-filter.filter';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientService: PatientsService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async createPatient(@Body() dto: CreatePatientDto) {
    return this.patientService.createPatient(dto);
  }

  @Get('/:id')
  async getPatient(@Param('id') id: number) {
    return this.patientService.getPatient(id);
  }
}
