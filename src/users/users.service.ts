import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationArgs } from './dto/pagination.args';
import { SortArgs } from './dto/sort.args';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userRepository.save(createUserInput);
  }

  // pagination: {page: 1, pageSize: 10, start: 0, limit: 10}, sort: "id:asc"
  async findAll(
    paginationArgs: PaginationArgs,
    sortArgs: SortArgs,
  ): Promise<User[]> {
    const { page, pageSize, start, limit } = paginationArgs.pagination;
    const { sort } = sortArgs;
    return await this.userRepository.find({
      order: {
        [sort.split(':')[0]]: sort.split(':')[1],
      },
      skip: start ? start : (page - 1) * pageSize,
      take: limit ? limit : pageSize,
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userRepository.update({ id }, updateUserInput);
    return await this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    await this.userRepository.delete({ id });
    return user;
  }

  async findOneByUuid(uuid: string): Promise<User> {
    return await this.userRepository.findOne({ where: { uuid } });
  }
}
