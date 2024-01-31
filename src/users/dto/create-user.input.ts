import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Number, { description: 'Student number' })
  schoolNumber: number;
}
