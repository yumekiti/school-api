import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class SortArgs {
  @Field(() => String, { nullable: true, defaultValue: 'id:asc' })
  sort?: string;
}