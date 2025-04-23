import {
    IsNotEmpty,
    
  } from 'class-validator';

export class CreateTaskDTO {
    @IsNotEmpty()
    public description




}
