import { Module } from '@nestjs/common';
import { AccessPointsService } from './access-points.service';
import { AccessPointsResolver } from './access-points.resolver';
import { AccessPoint } from './entities/access-point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WifiNetworksModule } from '../wifi-networks/wifi-networks.module';

@Module({
  imports: [TypeOrmModule.forFeature([AccessPoint]), WifiNetworksModule],
  providers: [AccessPointsResolver, AccessPointsService],
})
export class AccessPointsModule {}
