import { User as DomainUser } from '../entities/users.entity';
import { Prisma, User as PrismaUser } from '@prisma/client';

export class userMapper {
  static toPersistence(user: DomainUser): Prisma.UserCreateInput {
    return {
      id_user: user.id_user,
      email: user.email,
      name: user.name,
      password: user.password,
      phone: user.phone,
    };
  }

  static toDomain(raw: PrismaUser): DomainUser {
    return new DomainUser(
      {
        email: raw.email,
        name: raw.name,
        password: raw.password,
        phone: raw.phone || '',
      },
      raw.id_user,
    );
  }
}
