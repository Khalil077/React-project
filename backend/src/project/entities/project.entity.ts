import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
 import { TimeStamp } from 'src/generics/timestamp';
import { TaskEntity } from '../task/entities/task.entity';
 
 
 @Entity('projects')
 export class ProjectEntity extends TimeStamp  { 
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column()
   title: string;
 
   @Column()
   description: string;
 
   @Column()
   date: Date;
   @OneToMany(() => TaskEntity, (task) => task.project, {
    onDelete: 'CASCADE',
    cascade: true,
   } )
   ListeTasks: TaskEntity[]; }