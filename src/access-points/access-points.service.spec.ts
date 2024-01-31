import { Test, TestingModule } from '@nestjs/testing';
import { AccessPointsService } from './access-points.service';

describe('AccessPointsService', () => {
  let service: AccessPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessPointsService],
    }).compile();

    service = module.get<AccessPointsService>(AccessPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
