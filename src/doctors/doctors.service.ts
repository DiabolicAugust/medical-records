import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Doctor from './entities/doctor.entity';
import { Repository } from 'typeorm';
import Specialization from './entities/specialization.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Specialization)
    private readonly specializationRepository: Repository<Specialization>,
  ) {}

  async createSpecialization(name: string) {
    const specialization = await this.specializationRepository.save({ name });

    if (!specialization) {
      throw new HttpException('Smthing went wrong', HttpStatus.BAD_REQUEST);
    }
    return specialization;
  }

  async getSpecializations() {
    return this.specializationRepository.find();
  }
}
