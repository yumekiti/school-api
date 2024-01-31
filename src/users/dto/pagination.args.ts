import { ArgsType, Field, Int, InputType } from '@nestjs/graphql';

@InputType()
class Pagination {
  @Field(() => Int, { defaultValue: 1 })
  page: number;

  @Field(() => Int, { defaultValue: 10 })
  pageSize: number;

  @Field(() => Int, { nullable: true })
  start?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;
}

@ArgsType()
export class PaginationArgs {
  @Field(() => Pagination, { defaultValue: { page: 1, pageSize: 10 } })
  pagination?: Pagination;
}
