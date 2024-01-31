import { Test, TestingModule } from '@nestjs/testing';
import { AccessPointsResolver } from './access-points.resolver';
import { AccessPointsService } from './access-points.service';

describe('AccessPointsResolver', () => {
  let resolver: AccessPointsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessPointsResolver, AccessPointsService],
    }).compile();

    resolver = module.get<AccessPointsResolver>(AccessPointsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
