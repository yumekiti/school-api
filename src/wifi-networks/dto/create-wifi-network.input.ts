import { InputType, Int, Field } from '@nestjs/graphql';

/*
- インターフェース (iface)
- モデル (model)
- セキュリティ (security)
- SSID (ssid)
- タイプ (type)
*/

@InputType()
export class CreateWifiNetworkInput {
  @Field(() => String, { description: 'SSID' })
  ssid: string;

  @Field(() => String, { description: 'セキュリティ' })
  security: string;

  @Field(() => String, { description: 'タイプ' })
  type: string;

  @Field(() => String, { description: 'インターフェース' })
  iface: string;

  @Field(() => String, { description: 'モデル' })
  model: string;
}
