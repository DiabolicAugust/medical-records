import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Specialization from './specialization.entity';

interface Contacts {
  phoneNumber: string;
  email: string;
}

@Entity('doctor')
export default class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

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

  @Column({ type: 'simple-json' })
  contacts: Contacts;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
