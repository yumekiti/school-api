import { Injectable } from '@nestjs/common';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';
import { Room } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room) private roomsRepository: Repository<Room>,
  ) {}

  create(createRoomInput: CreateRoomInput): Promise<Room> {
    const room = this.roomsRepository.create(createRoomInput);
    return this.roomsRepository.save(room);
  }

  findAll(): Promise<Room[]> {
    return this.roomsRepository.find();
  }

  findOne(id: number): Promise<Room> {
    return this.roomsRepository.findOne({ where: { id } });
  }

  update(id: number, updateRoomInput: UpdateRoomInput): Promise<Room> {
    this.roomsRepository.update({ id }, updateRoomInput);
    return this.findOne(id);
  }

  remove(id: number): Promise<Room> {
    const room = this.findOne(id);
    this.roomsRepository.delete({ id });
    return room;
  }

  findOneByName(name: string): Promise<Room> {
    return this.roomsRepository.findOne({ where: { name } });
  }
}
