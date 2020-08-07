import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Class from '@modules/Classe/infra/typeorm/entities/Class';

@Entity('class_schedule')
class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  class_id: string;

  @ManyToOne(() => Class, classy => classy.id)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @Column()
  week_day: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Schedule;
