import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }
  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(password, salt);

    return await this.userRepository.save({
      name,
      email,
      password: hashedpassword,
    });

  }

  findAll() {
    return this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
  }
  

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
