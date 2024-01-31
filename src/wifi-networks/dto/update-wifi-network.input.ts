import { CreateWifiNetworkInput } from './create-wifi-network.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWifiNetworkInput extends PartialType(
  CreateWifiNetworkInput,
) {
  @Field(() => Int)
  id: number;
}
