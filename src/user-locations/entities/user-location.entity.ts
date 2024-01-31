import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Room } from 'src/rooms/entities/room.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
@ObjectType()
export class UserLocation {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => Int, { description: 'ユーザーID' })
  user_id: number;

  @Column()
  @Field(() => Int, { description: '部屋ID' })
  room_id: number;

  @ManyToOne(() => Room, (room) => room.user_locations)
  @JoinColumn({ name: 'room_id' })
  @Field(() => Room, { description: '部屋' })
  room: Room;

  @ManyToOne(() => User, (user) => user.user_locations)
  @JoinColumn({ name: 'user_id' })
  @Field(() => User, { description: 'ユーザー' })
  user: User;

  @CreateDateColumn()
  @Field(() => Date, { description: 'Created at' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: 'Updated at' })
  updated_at: Date;
}
