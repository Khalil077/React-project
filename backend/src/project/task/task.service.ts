import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectService } from '../project.service';

@Injectable()
export class TaskService {
     constructor(
            @InjectRepository(TaskEntity) 
            private TaskRep: Repository<TaskEntity>, 
            private ProjecServ:ProjectService
          ) {}
        
      async addtask(id,task) { 
            const project = await this.ProjecServ.findbyid(id);
            if (!project) throw new NotFoundException(`project with id "${id}" not found`)
           
                const newTask = this.TaskRep.create({
                    description: task.description,  
                    project: project,  
                  });
                return await this.TaskRep.save(newTask)
            }
      async findall() {
        return await this.TaskRep.find()
      }
        }
       
  


     

