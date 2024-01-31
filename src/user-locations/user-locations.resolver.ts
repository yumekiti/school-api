import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserLocationsService } from './user-locations.service';
import { UserLocation } from './entities/user-location.entity';
import { CreateUserLocationInput } from './dto/create-user-location.input';
import { UpdateUserLocationInput } from './dto/update-user-location.input';

@Resolver(() => UserLocation)
export class UserLocationsResolver {
  constructor(private readonly userLocationsService: UserLocationsService) {}

  @Mutation(() => UserLocation)
  createUserLocation(
    @Args('createUserLocationInput')
    createUserLocationInput: CreateUserLocationInput,
  ) {
    return this.userLocationsService.create(createUserLocationInput);
  }

  @Query(() => [UserLocation], { name: 'userLocations' })
  findAll() {
    return this.userLocationsService.findAll();
  }

  @Query(() => UserLocation, { name: 'userLocation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userLocationsService.findOne(id);
  }

  @Mutation(() => UserLocation)
  updateUserLocation(
    @Args('updateUserLocationInput')
    updateUserLocationInput: UpdateUserLocationInput,
  ) {
    return this.userLocationsService.update(
      updateUserLocationInput.id,
      updateUserLocationInput,
    );
  }

  @Mutation(() => UserLocation)
  removeUserLocation(@Args('id', { type: () => Int }) id: number) {
    return this.userLocationsService.remove(id);
  }
}
