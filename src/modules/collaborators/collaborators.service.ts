import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCollaboratorDto } from './collaboratorsDTO/create.collaborator.dto';
import * as bcrypt from 'bcrypt';

type FilterDto = { id_collaborator: string } | { email: string };

@Injectable()
export class CollaboratorsService {
  constructor(private readonly prisma: PrismaService) {}

  async createCollaborator({
    id_profession_collaborator,
    id_departament_collaborator,
    id_accessLevel_collaborator,
    password,
    // name,
    // email,
    // phone,
    accessToken,
  }: CreateCollaboratorDto) {
    // const alreadyExists = await this.findCollaborator({ email });
    // if (alreadyExists) {
    //   throw new ConflictException(
    //     `Já existe um colaborador cadastrado com esse email: ${email}`,
    //   );
    // }
    // const profession = await this.prisma.profession.upsert({
    //   where: { id_profession: id_profession_collaborator || 1 },
    //   update: {},
    //   create: { name: 'Aprendiz' },
    // });
    // const department = await this.prisma.department.upsert({
    //   where: { id_departament: id_departament_collaborator || 1 },
    //   update: {},
    //   create: { name: 'Integração' },
    // });
    // const accessLevel = await this.prisma.upsert({
    //   where: { id_accessLevel: id_accessLevel_collaborator || 1 },
    //   update: {},
    //   create: { levelName: 'USER' },
    // });
    // const payload = {
    //   name,
    //   email,
    //   phone,
    //   password: await bcrypt.hash(password, 10),
    //   accessToken,
    //   department: { connect: { id_departament: department.id_departament } },
    //   profession: { connect: { id_profession: profession.id_profession } },
    //   accessLevelRef: {
    //     connect: { id_accessLevel: accessLevel.id_accessLevel },
    //   },
    // };
    // return await this.prisma.collaborator.create({
    //   data: payload,
    // });
  }

  async remove(id_collaborator: string) {
    await this.findCollaboratorById(id_collaborator);

    await this.prisma.collaborator.delete({
      where: { id_collaborator },
    });
    return {
      success: true,
      message: 'Colaborador removido com sucesso',
    };
  }

  async findCollaboratorByEmail(email: string) {
    // const collaborator = await this.findCollaborator({ email });
    // if (!collaborator) {
    //   throw new NotFoundException(
    //     `Colaborador não encontrado para este email: ${email}`,
    //   );
    // }
    // return collaborator;
  }

  async findCollaboratorById(id_collaborator: string) {
    // const collaborator = await this.findCollaborator({ id_collaborator });
    // if (!collaborator) {
    //   throw new NotFoundException(
    //     `Colaborador não encontrado para este Id: ${id_collaborator}`,
    //   );
    // }
    // return collaborator;
  }

  private async findCollaborator(where: FilterDto) {
    // return await this.prisma.collaborator.findUnique({
    //   where: where,
    //   include: {
    //     department: { select: { id_departament: true, name: true } },
    //     profession: true,
    //   },
    //   omit: {
    //     password: true,
    //     id_accessLevel_collaborator: true,
    //     id_departament_collaborator: true,
    //     id_profession_collaborator: true,
    //     createdAt: true,
    //     updatedAt: true,
    //   },
    // });
  }
}
