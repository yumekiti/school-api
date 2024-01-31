import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoomInput {
  @Field(() => String, { description: '部屋名' })
  room_name: string;
}
