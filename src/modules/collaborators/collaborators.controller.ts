import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CreateCollaboratorDto } from './collaboratorsDTO/create.collaborator.dto';

@Controller('collaborators')
export class CollaboratorsController {
  constructor(private readonly service: CollaboratorsService) {}

  @Post()
  async create(@Body() data: CreateCollaboratorDto) {
    return await this.service.createCollaborator(data);
  }

  @Get('by-email')
  async findByEmail(@Body() { email }: { email: string }) {
    return await this.service.findCollaboratorByEmail(email);
  }

  @Get('by-id')
  async findById(@Body() { id_collaborator }: { id_collaborator: string }) {
    return await this.service.findCollaboratorById(id_collaborator);
  }

  @Delete()
  async remove(@Body() { id_collaborator }: { id_collaborator: string }) {
    return await this.service.remove(id_collaborator);
  }
}
