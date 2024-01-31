import { Injectable } from '@nestjs/common';
import { CreateWifiNetworkInput } from './dto/create-wifi-network.input';
import { UpdateWifiNetworkInput } from './dto/update-wifi-network.input';

@Injectable()
export class WifiNetworksService {
  create(createWifiNetworkInput: CreateWifiNetworkInput) {
    return 'This action adds a new wifiNetwork';
  }

  findAll() {
    return `This action returns all wifiNetworks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wifiNetwork`;
  }

  update(id: number, updateWifiNetworkInput: UpdateWifiNetworkInput) {
    return `This action updates a #${id} wifiNetwork`;
  }

  remove(id: number) {
    return `This action removes a #${id} wifiNetwork`;
  }
}
