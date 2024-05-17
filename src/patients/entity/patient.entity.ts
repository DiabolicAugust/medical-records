import { Person } from '../../person/entity/basis-person.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import Doctor from '../../doctors/entities/doctor.entity';

@Entity('patient')
export default class Patient extends Person {
  @ManyToOne(() => Doctor, { eager: true, nullable: true })
  doctor: Doctor;
}
