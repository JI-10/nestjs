import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './ps/products.module';

@Module({
  imports: [ProductsModule,MongooseModule.forRoot("mongodb+srv://JI-10:jitenmandwe@cluster-0.iharc.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
