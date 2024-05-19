import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Patient from './entity/patient.entity';
import { Repository } from 'typeorm';
import Doctor from '../doctors/entities/doctor.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepo: Repository<Patient>,
    @InjectRepository(Doctor)
    private readonly doctorRepo: Repository<Doctor>,
  ) {}

  async createPatient(dto: CreatePatientDto) {
    let doctor: Doctor;
    if (dto.doctor) {
      doctor = await this.doctorRepo.findOneBy({ id: dto.doctor });
      if (!doctor)
        throw new HttpException(
          `No doctor with such id: ${dto.doctor}`,
          HttpStatus.BAD_REQUEST,
        );
    }

    const patient = await this.patientRepo.save({ ...dto, doctor });
    if (!patient)
      throw new HttpException(`Something went wrong`, HttpStatus.BAD_REQUEST);

    return patient;
  }

  async getPatient(id: number) {
    const patient = await this.patientRepo.findOneBy({ id: id });
    if (!patient)
      throw new HttpException(
        `No patient was found by this id: ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    return patient;
  }

  async deletePatient(id: number) {
    const deleteResult = await this.patientRepo.delete(id);
    if (deleteResult.affected === 0) {
      throw new HttpException(
        `No patient was found by this id: ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return deleteResult;
  }
}
