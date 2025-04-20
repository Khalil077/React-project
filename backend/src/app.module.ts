import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';

@Module({
   imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost', 
    port: 3306, 
    username: "root",
    password: "",
    database: 'BD-Projects', 
    synchronize: false, 
    logging: true,
    autoLoadEntities: true
  }), ProjectModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
