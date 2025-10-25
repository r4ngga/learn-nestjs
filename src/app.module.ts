import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/example')], 
  /** change this
   *  example mongodb://127.0.0.1:27017/nest or mongodb://localhost/nest */
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
