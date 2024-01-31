import { Injectable } from '@nestjs/common';
import { CreateAccessPointInput } from './dto/create-access-point.input';
import { UpdateAccessPointInput } from './dto/update-access-point.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessPoint } from './entities/access-point.entity';
import { WifiNetworksService } from '../wifi-networks/wifi-networks.service';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class AccessPointsService {
  constructor(
    @InjectRepository(AccessPoint)
    private accessPointRepository: Repository<AccessPoint>,
    private readonly wifiNetworksService: WifiNetworksService,
    private readonly roomsService: RoomsService,
  ) {}

  async create(
    createAccessPointInput: CreateAccessPointInput,
  ): Promise<AccessPoint> {
    const { ssid } = createAccessPointInput.wifi;
    const { room_name } = createAccessPointInput.room;

    let room = await this.roomsService.findOneByName(room_name);
    if (!room) {
      room = await this.roomsService.create(createAccessPointInput.room);
    }

    let wifi = await this.wifiNetworksService.findOneBySsid(ssid);
    if (!wifi) {
      wifi = await this.wifiNetworksService.create(createAccessPointInput.wifi);
    }

    return await this.accessPointRepository.save({
      ...createAccessPointInput,
      room,
      wifi,
    });
  }

  findAll(): Promise<AccessPoint[]> {
    return this.accessPointRepository.find({ relations: ['wifi', 'room'] });
  }

  findOne(id: number): Promise<AccessPoint> {
    return this.accessPointRepository.findOne({
      where: { id },
      relations: ['wifi', 'room'],
    });
  }

  update(
    id: number,
    updateAccessPointInput: UpdateAccessPointInput,
  ): Promise<AccessPoint> {
    this.accessPointRepository.update({ id }, updateAccessPointInput);
    return this.accessPointRepository.findOne({
      where: { id },
      relations: ['wifi', 'room'],
    });
  }

  remove(id: number): Promise<AccessPoint> {
    const accessPoint = this.accessPointRepository.findOne({
      where: { id },
      relations: ['wifi', 'room'],
    });
    this.accessPointRepository.delete({ id });
    return accessPoint;
  }

  async findOneByBssid(bssid: string): Promise<AccessPoint> {
    return await this.accessPointRepository.findOne({
      where: { bssid },
      relations: ['wifi', 'room'],
    });
  }
}
