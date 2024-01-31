import { Test, TestingModule } from '@nestjs/testing';
import { UserLocationsResolver } from './user-locations.resolver';
import { UserLocationsService } from './user-locations.service';

describe('UserLocationsResolver', () => {
  let resolver: UserLocationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLocationsResolver, UserLocationsService],
    }).compile();

    resolver = module.get<UserLocationsResolver>(UserLocationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
