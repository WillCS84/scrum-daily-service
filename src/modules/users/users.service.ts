import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/users.entity';
import { userMapper } from './repositories/user.mapper';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(dto: {
    email: string;
    name: string;
    password: string;
    phone: string;
  }) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = new User({ ...dto, password: hashedPassword });

    const data = userMapper.toPersistence(user);

    const created = await this.prisma.user.create({ data });

    return userMapper.toDomain(created);
  }
}
