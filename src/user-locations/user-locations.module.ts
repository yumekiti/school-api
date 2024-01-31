import { Module } from '@nestjs/common';
import { UserLocationsService } from './user-locations.service';
import { UserLocationsResolver } from './user-locations.resolver';
import { UserLocation } from './entities/user-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessPointsModule } from '../access-points/access-points.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserLocation]), AccessPointsModule],
  providers: [UserLocationsResolver, UserLocationsService],
})
export class UserLocationsModule {}
