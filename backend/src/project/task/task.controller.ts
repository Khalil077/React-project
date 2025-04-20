import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private TaskSer:TaskService){}
    
 @Post('add/:id')
    modifierproject(@Body() body,@Param('id',ParseIntPipe) id ) {
        return this.TaskSer.addtask(id,body)

    }
  @Get('findall') 
    findalltasks() { 
      return this.TaskSer.findall()
    }
  


}
