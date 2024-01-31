import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateWifiNetworkInput } from 'src/wifi-networks/dto/create-wifi-network.input';
import { CreateRoomInput } from 'src/rooms/dto/create-room.input';

@InputType()
export class CreateAccessPointInput {
  @Field(() => String, { description: 'BSSID' })
  bssid: string;

  @Field(() => Int, { description: 'チャンネル' })
  channel: number;

  @Field(() => Int, { description: '周波数' })
  frequency: number;

  @Field(() => CreateWifiNetworkInput, { description: 'WiFi' })
  wifi: CreateWifiNetworkInput;

  @Field(() => CreateRoomInput, { description: '部屋' })
  room: CreateRoomInput;
}
