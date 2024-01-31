import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WifiNetworksService } from './wifi-networks.service';
import { WifiNetwork } from './entities/wifi-network.entity';
import { CreateWifiNetworkInput } from './dto/create-wifi-network.input';
import { UpdateWifiNetworkInput } from './dto/update-wifi-network.input';

@Resolver(() => WifiNetwork)
export class WifiNetworksResolver {
  constructor(private readonly wifiNetworksService: WifiNetworksService) {}

  @Mutation(() => WifiNetwork)
  createWifiNetwork(@Args('createWifiNetworkInput') createWifiNetworkInput: CreateWifiNetworkInput) {
    return this.wifiNetworksService.create(createWifiNetworkInput);
  }

  @Query(() => [WifiNetwork], { name: 'wifiNetworks' })
  findAll() {
    return this.wifiNetworksService.findAll();
  }

  @Query(() => WifiNetwork, { name: 'wifiNetwork' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wifiNetworksService.findOne(id);
  }

  @Mutation(() => WifiNetwork)
  updateWifiNetwork(@Args('updateWifiNetworkInput') updateWifiNetworkInput: UpdateWifiNetworkInput) {
    return this.wifiNetworksService.update(updateWifiNetworkInput.id, updateWifiNetworkInput);
  }

  @Mutation(() => WifiNetwork)
  removeWifiNetwork(@Args('id', { type: () => Int }) id: number) {
    return this.wifiNetworksService.remove(id);
  }
}
