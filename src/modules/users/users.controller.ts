import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create.user.dto';
import { User } from './entities/users.entity';
import { UserResponseDTO } from './dtos/user.response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO): Promise<UserResponseDTO> {
    const user = await this.userService.createUser(createUserDTO);
    return UserResponseDTO.fromEntity(user);
  }
}
