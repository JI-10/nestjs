import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { psSchema } from './ps.model';

import { psController } from './ps.controller';
import { psService } from './ps.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name:'ps',
        schema:psSchema,
    }])],
    controllers: [psController],
    providers: [psService],
})
export class psModule {}
