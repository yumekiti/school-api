import { Test, TestingModule } from '@nestjs/testing';
import { WifiNetworksService } from './wifi-networks.service';

describe('WifiNetworksService', () => {
  let service: WifiNetworksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WifiNetworksService],
    }).compile();

    service = module.get<WifiNetworksService>(WifiNetworksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
