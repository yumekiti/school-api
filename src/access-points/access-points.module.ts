import { Module } from '@nestjs/common';
import { AccessPointsService } from './access-points.service';
import { AccessPointsResolver } from './access-points.resolver';
import { AccessPoint } from './entities/access-point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WifiNetworksModule } from '../wifi-networks/wifi-networks.module';
import { RoomsModule } from '../rooms/rooms.module'

@Module({
  imports: [TypeOrmModule.forFeature([AccessPoint]), WifiNetworksModule, RoomsModule],
  providers: [AccessPointsResolver, AccessPointsService],
  exports: [AccessPointsService],
})
export class AccessPointsModule {}
