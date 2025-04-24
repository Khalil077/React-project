import { Body, Controller, Delete, Get, InternalServerErrorException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
    constructor(private ProjectServ:ProjectService){}

    @Post('add')
    async create(@Body() body : CreateProjectDto){
        try {
            return await this.ProjectServ.create(body);
        } catch (error) {
            console.error('Error creating Project:', error.message); 
    throw new InternalServerErrorException('Could not create Project'); 
        }
    }
    @Get('findall') 
    async find() {
        return await this.ProjectServ.findall()
    }
    @Get('findbyid/:id')
    async findbyid(@Param('id',ParseIntPipe) id) { 
        return this.ProjectServ.findbyid(id)

    }
    @Put('update/:id')
    modifierproject(@Body() body,@Param('id',ParseIntPipe) id ) {
        return this.ProjectServ.updateproject(body ,id)

    }
    @Delete('delete/:id') 
    deleteproject(@Param('id',ParseIntPipe) id){
        return this.ProjectServ.softremove(id)
        
     }
    
}
