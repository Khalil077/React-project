import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { ProjectService } from '../project.service';
import { ProjectModule } from '../project.module';

@Module({
  imports:[ TypeOrmModule.forFeature([TaskEntity]),ProjectModule],
  controllers: [TaskController],
  providers: [TaskService],
  
})
export class TaskModule {}
