import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RegionModule } from './region/region.module';

@Module({
  imports: [AuthModule, PrismaModule, RegionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
