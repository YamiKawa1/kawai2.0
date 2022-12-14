import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env.MONGODB_URI)
@Module({
    imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI)],
    controllers: [AppController, ],
    providers: [AppService, ],
})

export class AppModule {}
