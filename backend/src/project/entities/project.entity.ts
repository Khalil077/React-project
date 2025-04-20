import { Column, Entity, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
 import { TimeStamp } from 'src/generics/timestamp';
 
 
 @Entity('projects')
 export class ProjectEntity extends TimeStamp  { 
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column()
   title: string;
 
   @Column()
   description: string;
 
   @Column()
   date: Date; }