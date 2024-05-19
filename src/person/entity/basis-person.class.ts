import { IsEnum } from 'class-validator';
import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from 'typeorm';

export enum Sex {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

@TableInheritance({ column: { type: 'varchar', name: 'type' } })
@Check(`"sex" IN ('male', 'female', 'other')`)
export abstract class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  email: string;

  @Column({
    type: 'enum',
    enum: Sex,
  })
  @IsEnum(Sex)
  sex: Sex;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
