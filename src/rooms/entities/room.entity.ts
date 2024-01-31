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
- 部屋ID (room_id) - 主キー
- 部屋名 (name)
*/

@Entity()
@ObjectType()
export class Room {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => String, { description: '部屋名' })
  name: string;

  @Field(() => [AccessPoint], { description: 'アクセスポイント' })
  accessPoints: AccessPoint[];

  @CreateDateColumn()
  @Field(() => Date, { description: 'Created at' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: 'Updated at' })
  updated_at: Date;
}
