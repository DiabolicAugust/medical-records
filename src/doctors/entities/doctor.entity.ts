import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import Specialization from './specialization.entity';
import { Person } from '../../person/entity/basis-person.class';

interface WorkSchedule {
  day: string;
  startTime: string; // 'HH:mm' format
  endTime: string;
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

  @Column()
  qualifications: string[];

  @Column({ type: 'simple-json' })
  workSchedule: WorkSchedule;
}
