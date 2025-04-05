import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsController } from './collaborators.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CollaboratorsService],
  controllers: [CollaboratorsController],
  exports: [CollaboratorsService],
})
export class CollaboratorsModule {}
