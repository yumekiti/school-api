import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccessPointsService } from './access-points.service';
import { AccessPoint } from './entities/access-point.entity';
import { CreateAccessPointInput } from './dto/create-access-point.input';
import { UpdateAccessPointInput } from './dto/update-access-point.input';

@Resolver(() => AccessPoint)
export class AccessPointsResolver {
  constructor(private readonly accessPointsService: AccessPointsService) {}

  @Mutation(() => AccessPoint)
  createAccessPoint(@Args('createAccessPointInput') createAccessPointInput: CreateAccessPointInput) {
    return this.accessPointsService.create(createAccessPointInput);
  }

  @Query(() => [AccessPoint], { name: 'accessPoints' })
  findAll() {
    return this.accessPointsService.findAll();
  }

  @Query(() => AccessPoint, { name: 'accessPoint' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.accessPointsService.findOne(id);
  }

  @Mutation(() => AccessPoint)
  updateAccessPoint(@Args('updateAccessPointInput') updateAccessPointInput: UpdateAccessPointInput) {
    return this.accessPointsService.update(updateAccessPointInput.id, updateAccessPointInput);
  }

  @Mutation(() => AccessPoint)
  removeAccessPoint(@Args('id', { type: () => Int }) id: number) {
    return this.accessPointsService.remove(id);
  }
}
