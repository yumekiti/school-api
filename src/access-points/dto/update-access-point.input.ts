import { CreateAccessPointInput } from './create-access-point.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAccessPointInput extends PartialType(
  CreateAccessPointInput,
) {
  @Field(() => Int)
  id: number;
}
