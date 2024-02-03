import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserLocation } from 'src/user-locations/entities/user-location.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => Int, { description: '学籍番号' })
  school_number: number;

  @Column()
  @Field(() => String, { description: '名前' })
  username: string;

  @Column()
  @Field(() => String, { description: 'クラス名' })
  class_name: string;

  @Column()
  @Field(() => String, { description: '出席番号' })
  attendance_number: string;

  @Column()
  @Field(() => Boolean, { description: '呼び出し状態' })
  is_calling: boolean;

  @OneToMany(() => UserLocation, (userLocation) => userLocation.user)
  @Field(() => [UserLocation], { description: 'ユーザーの位置情報' })
  user_locations: UserLocation[];

  @CreateDateColumn()
  @Field(() => Date, { description: '作成日時' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: '更新日時' })
  updated_at: Date;
}
