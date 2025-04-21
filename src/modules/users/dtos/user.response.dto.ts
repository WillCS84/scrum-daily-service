import { User } from '../entities/users.entity';

export class UserResponseDTO {
  id_user: string;
  name: string;
  email: string;
  phone: string;

  constructor(props: UserResponseDTO) {
    Object.assign(this, props);
  }

  static fromEntity(user: User): UserResponseDTO {
    return new UserResponseDTO({
      id_user: user.id_user,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  }
}
