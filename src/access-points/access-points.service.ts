import { Injectable } from '@nestjs/common';
import { CreateAccessPointInput } from './dto/create-access-point.input';
import { UpdateAccessPointInput } from './dto/update-access-point.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessPoint } from './entities/access-point.entity';
import { WifiNetworksService } from '../wifi-networks/wifi-networks.service';

@Injectable()
export class AccessPointsService {
  constructor(
    @InjectRepository(AccessPoint)
    private accessPointRepository: Repository<AccessPoint>,
    private readonly wifiNetworksService: WifiNetworksService,
  ) {}

  async create(
    createAccessPointInput: CreateAccessPointInput,
  ): Promise<AccessPoint> {
    const { ssid } = createAccessPointInput.wifi;

    let wifiNetwork = await this.wifiNetworksService.findOneBySsid(ssid);
    if (!wifiNetwork) {
      wifiNetwork = await this.wifiNetworksService.create(
        createAccessPointInput.wifi,
      );
    }

    return await this.accessPointRepository.save({
      ...createAccessPointInput,
      wifi: wifiNetwork,
    });
  }

  findAll(): Promise<AccessPoint[]> {
    return this.accessPointRepository.find({ relations: ['wifi'] });
  }

  findOne(id: number): Promise<AccessPoint> {
    return this.accessPointRepository.findOne({
      where: { id },
      relations: ['wifi'],
    });
  }

  update(
    id: number,
    updateAccessPointInput: UpdateAccessPointInput,
  ): Promise<AccessPoint> {
    this.accessPointRepository.update({ id }, updateAccessPointInput);
    return this.accessPointRepository.findOne({
      where: { id },
      relations: ['wifi'],
    });
  }

  remove(id: number): Promise<AccessPoint> {
    const accessPoint = this.accessPointRepository.findOne({
      where: { id },
      relations: ['wifi'],
    });
    this.accessPointRepository.delete({ id });
    return accessPoint;
  }
}
