import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class SchoolNumberArgs {
  @Field(() => Int, { defaultValue: 0 })
  school_number: Number;
}
