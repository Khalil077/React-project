import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { TaskEntity } from './task/entities/task.entity';


@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(ProjectEntity) 
        private ProjectRep: Repository<ProjectEntity>, 
        @InjectRepository(TaskEntity) 
        private TaskRep: Repository<TaskEntity>, 

      ) {}

    create(project): Promise<ProjectEntity> { 

        return this.ProjectRep.save(project); 
    }

    findall() {
        return this.ProjectRep.find( { 
            relations: ['ListeTasks'],
        })
    }

    findbyid(id) { 
        return this.ProjectRep.findOne({ where: { id: id } });
    }

    async softremove(id) {
      await this.TaskRep
    .createQueryBuilder()
    .softDelete()
    .where("projectId = :id", { id })
    .execute(); //softdelete does not support cascade in entity edheka aleh lezmna nzido commande hedhy
    let project= await this.findbyid(id)
    if (project )
    return await this.ProjectRep.softRemove( project );
    
 
    }

    async updateproject(project,id) { 
      
        let b= await this.ProjectRep.preload(
           { id:id ,
              ...project
           }
        ) 
        if (!b) throw new NotFoundException(`project with id "${id}" not found`) 
         this.ProjectRep.save(b)
        return (b)     

      }


}
