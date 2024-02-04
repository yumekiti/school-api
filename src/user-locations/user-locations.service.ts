import { Injectable } from '@nestjs/common';
import { CreateUserLocationInput } from './dto/create-user-location.input';
import { UpdateUserLocationInput } from './dto/update-user-location.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import { UserLocation } from './entities/user-location.entity';
import { AccessPointsService } from '../access-points/access-points.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class UserLocationsService {
  constructor(
    @InjectRepository(UserLocation)
    private userLocationRepository: Repository<UserLocation>,
    private readonly accessPointsService: AccessPointsService,
    private readonly userService: UsersService,
  ) {}

  async create(
    createUserLocationInput: CreateUserLocationInput,
    schoolNumberArgs,
  ): Promise<UserLocation> {
    const { bssid } = createUserLocationInput.access_point;
    const { school_number } = schoolNumberArgs;

    let access_point = await this.accessPointsService.findOneByBssid(bssid);
    if (!access_point) {
      access_point = await this.accessPointsService.create(
        createUserLocationInput.access_point,
      );
    }

    const user = await this.userService.findOneByUuid(school_number);
    if (!user) {
      throw new Error('User not found');
    }

    return await this.userLocationRepository.save({
      ...createUserLocationInput,
      user,
      room: access_point.room,
    });
  }

  findAll(): Promise<UserLocation[]> {
    const today = new Date();

    return this.userLocationRepository.find({
      where: { created_at: LessThan(today) },
      relations: ['user', 'room'],
    });
  }

  findOne(id: number): Promise<UserLocation> {
    return this.userLocationRepository.findOne({
      where: { id },
      relations: ['user', 'room'],
    });
  }

  update(
    id: number,
    updateUserLocationInput: UpdateUserLocationInput,
  ): Promise<UserLocation> {
    this.userLocationRepository.update({ id }, updateUserLocationInput);
    return this.userLocationRepository.findOne({
      where: { id },
      relations: ['user', 'room'],
    });
  }

  remove(id: number): Promise<UserLocation> {
    const userLocation = this.userLocationRepository.findOne({
      where: { id },
      relations: ['user', 'room'],
    });
    this.userLocationRepository.delete({ id });
    return userLocation;
  }
}
