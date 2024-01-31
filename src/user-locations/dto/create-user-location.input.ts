import { InputType, Field } from '@nestjs/graphql';
import { CreateAccessPointInput } from 'src/access-points/dto/create-access-point.input';

@InputType()
export class CreateUserLocationInput {
  @Field(() => CreateAccessPointInput, { description: 'アクセスポイント' })
  access_point: CreateAccessPointInput;
}
