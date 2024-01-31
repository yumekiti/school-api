import { Injectable } from '@nestjs/common';
import { CreateWifiNetworkInput } from './dto/create-wifi-network.input';
import { UpdateWifiNetworkInput } from './dto/update-wifi-network.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WifiNetwork } from './entities/wifi-network.entity';

@Injectable()
export class WifiNetworksService {
  constructor(
    @InjectRepository(WifiNetwork)
    private wifiNetworkRepository: Repository<WifiNetwork>,
  ) {}

  create(createWifiNetworkInput: CreateWifiNetworkInput): Promise<WifiNetwork> {
    return this.wifiNetworkRepository.save(createWifiNetworkInput);
  }

  findAll(): Promise<WifiNetwork[]> {
    return this.wifiNetworkRepository.find();
  }

  findOne(id: number): Promise<WifiNetwork> {
    return this.wifiNetworkRepository.findOne({ where: { id } });
  }

  update(
    id: number,
    updateWifiNetworkInput: UpdateWifiNetworkInput,
  ): Promise<WifiNetwork> {
    this.wifiNetworkRepository.update({ id }, updateWifiNetworkInput);
    return this.wifiNetworkRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<WifiNetwork> {
    const wifiNetwork = this.wifiNetworkRepository.findOne({ where: { id } });
    this.wifiNetworkRepository.delete({ id });
    return wifiNetwork;
  }

  async findOneBySsid(ssid: string): Promise<WifiNetwork> {
    return await this.wifiNetworkRepository.findOne({ where: { ssid } });
  }
}
