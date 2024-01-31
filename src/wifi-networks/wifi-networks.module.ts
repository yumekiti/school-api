import { Module } from '@nestjs/common';
import { WifiNetworksService } from './wifi-networks.service';
import { WifiNetworksResolver } from './wifi-networks.resolver';
import { WifiNetwork } from './entities/wifi-network.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WifiNetwork])],
  providers: [WifiNetworksResolver, WifiNetworksService],
})
export class WifiNetworksModule {}
