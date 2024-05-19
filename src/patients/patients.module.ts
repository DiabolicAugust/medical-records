import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Patient from './entity/patient.entity';
import Doctor from '../doctors/entities/doctor.entity';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [TypeOrmModule.forFeature([Patient, Doctor])],
})
export class PatientsModule {}
