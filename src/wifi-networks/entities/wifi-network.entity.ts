import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AccessPoint } from 'src/access-points/entities/access-point.entity';

/*
- インターフェース (iface)
- モデル (model)
- セキュリティ (security)
- SSID (ssid)
- タイプ (type)
*/

@Entity()
@ObjectType()
export class WifiNetwork {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'SSID' })
  ssid: string;

  @Column()
  @Field(() => String, { description: 'セキュリティ' })
  security: string;

  @Column()
  @Field(() => String, { description: 'タイプ' })
  type: string;

  @Column()
  @Field(() => String, { description: 'インターフェース' })
  iface: string;

  @Column()
  @Field(() => String, { description: 'モデル' })
  model: string;

  @CreateDateColumn()
  @Field(() => Date, { description: 'Created at' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: 'Updated at' })
  updated_at: Date;

  @Field(() => [AccessPoint], { description: 'アクセスポイント' })
  access_points: AccessPoint[];
}
