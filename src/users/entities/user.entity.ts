import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Column()
  @Field(() => Int, { description: 'School number' })
  schoolNumber: number;

  @Column({ default: false }) // Set a default value for location_visibility if needed
  @Field(() => Boolean, { description: 'Location visibility' })
  location_visibility: boolean;
}
