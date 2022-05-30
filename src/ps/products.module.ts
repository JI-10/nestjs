import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { psSchema } from './ps.model';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name:'ps',
        schema:psSchema,
    }])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
