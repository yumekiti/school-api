import { Injectable } from '@nestjs/common';
import { CreateUserLocationInput } from './dto/create-user-location.input';
import { UpdateUserLocationInput } from './dto/update-user-location.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserLocation } from './entities/user-location.entity';
import { AccessPointsService } from '../access-points/access-points.service';

@Injectable()
export class UserLocationsService {
  constructor(
    @InjectRepository(UserLocation)
    private userLocationRepository: Repository<UserLocation>,
    private readonly accessPointsService: AccessPointsService,
  ) {}

  async create(
    createUserLocationInput: CreateUserLocationInput,
  ): Promise<UserLocation> {
    const { bssid } = createUserLocationInput.access_point;

    let access_point = await this.accessPointsService.findOneByBssid(bssid);
    if (!access_point) {
      access_point = await this.accessPointsService.create(
        createUserLocationInput.access_point,
      );
    }

    return await this.userLocationRepository.save({
      ...createUserLocationInput,
      user: { id: 1 },
      room: access_point.room,
    });
  }

  findAll(): Promise<UserLocation[]> {
    return this.userLocationRepository.find({ relations: ['user', 'room'] });
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
