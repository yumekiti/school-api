import { Test, TestingModule } from '@nestjs/testing';
import { WifiNetworksResolver } from './wifi-networks.resolver';
import { WifiNetworksService } from './wifi-networks.service';

describe('WifiNetworksResolver', () => {
  let resolver: WifiNetworksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WifiNetworksResolver, WifiNetworksService],
    }).compile();

    resolver = module.get<WifiNetworksResolver>(WifiNetworksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
