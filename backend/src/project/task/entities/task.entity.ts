import { TimeStamp } from "src/generics/timestamp";
import { ProjectEntity } from "src/project/entities/project.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')

export class TaskEntity   extends TimeStamp{
   @PrimaryGeneratedColumn()
   id: number;
   
   @Column()
   description :string 

    @ManyToOne(() => ProjectEntity 
    , (project) => project.ListeTasks, {
        onDelete: 'CASCADE',
       
    })
    project: ProjectEntity;
}
