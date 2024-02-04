import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Number, { description: 'Student number' })
  school_number: number;

  @Field(() => String, { description: 'Name' })
  username: string;

  @Field(() => String, { description: 'Class name' })
  class_name: string;

  @Field(() => Int, { description: 'Attendance number' })
  attendance_number: Number;

  @Field(() => String, { description: 'UUID' })
  uuid: string;
}
