import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './project/task/task.module';

@Module({
   imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost', 
    port: 3306, 
    username: "root",
    password: "",
    database: 'BD-Projects', 
    synchronize: false, 
    logging: false,
        autoLoadEntities: true
  }), ProjectModule,TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
