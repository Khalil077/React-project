import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from '../dto/create-task.dto';

@Controller('task')
export class TaskController {
    constructor(private TaskSer:TaskService){}
    
 @Post('add/:id')
    modifierproject(@Body() body:CreateTaskDTO,@Param('id',ParseIntPipe) id ) {
        return this.TaskSer.addtask(id,body)

    }
  @Get('findall') 
    findalltasks() { 
      return this.TaskSer.findall()
    }
  @Delete('SoftRemove/:projectId/:taskId') 
  async delete(    @Param('projectId') projectId ,@Param('taskId') taskId) { 
    return await this.TaskSer.softdelete(projectId,taskId)


  }
  


}
