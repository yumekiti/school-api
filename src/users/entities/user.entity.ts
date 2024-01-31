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
  @Field(() => Int, { description: 'School number' })
  school_number: number;

  @Column({ default: false })
  @Field(() => Boolean, { description: 'Location visibility' })
  location_visibility: boolean;

  @OneToMany(() => UserLocation, (userLocation) => userLocation.user)
  @Field(() => [UserLocation], { description: 'User location' })
  user_locations: UserLocation[];

  @CreateDateColumn()
  @Field(() => Date, { description: 'Created at' })
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: 'Updated at' })
  updated_at: Date;
}
