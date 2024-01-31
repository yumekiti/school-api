import { ObjectType, Field, Int } from '@nestjs/graphql';
import { WifiNetwork } from 'src/wifi-networks/entities/wifi-network.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

/*
- アクセスポイントID (access_point_id) - 主キー
- BSSID (bssid)
- チャンネル (channel)
- 周波数 (frequency)
- WiFi ID (wifi_id) - 外部キー
*/

@Entity()
@ObjectType()
export class AccessPoint {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'BSSID' })
  bssid: string;

  @Column()
  @Field(() => Int, { description: 'チャンネル' })
  channel: number;

  @Column()
  @Field(() => Int, { description: '周波数' })
  frequency: number;

  @ManyToOne(() => WifiNetwork, wifiNetwork => wifiNetwork.accessPoints)
  @JoinColumn({ name: 'wifi_id' })
  @Field(() => WifiNetwork, { description: 'WiFi' })
  wifi: WifiNetwork;

  @Column()
  @Field(() => Int, { description: 'WiFi ID' })
  wifi_id: number;

  @CreateDateColumn()
  @Field(() => Date, { description: 'Created at' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: 'Updated at' })
  updated_at: Date;
}
