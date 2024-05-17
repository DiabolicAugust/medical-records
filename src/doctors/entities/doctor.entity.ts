import { Entity, JoinTable, ManyToMany } from 'typeorm';
import Specialization from './specialization.entity';
import { Person } from '../../person/entity/basis-person.entity';

interface Contacts {
  phoneNumber: string;
  email: string;
}

@Entity('doctor')
export default class Doctor extends Person {
  @ManyToMany(() => Specialization, { eager: true })
  @JoinTable({
    name: 'doctor_specialization',
    joinColumn: {
      name: 'doctor_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'specialization_id',
      referencedColumnName: 'id',
    },
  })
  specializations: Specialization[];
}
