import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollaboratorsService } from './modules/collaborators/collaborators.service';
import { CollaboratorsController } from './modules/collaborators/collaborators.controller';
import { CollaboratorsModule } from './modules/collaborators/collaborators.module';

@Module({
  imports: [CollaboratorsModule],
  controllers: [AppController, CollaboratorsController],
  providers: [AppService, CollaboratorsService],
})
export class AppModule {}
