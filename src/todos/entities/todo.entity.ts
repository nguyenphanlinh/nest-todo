import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => String, { nullable: true })
  todoId: string;

  @Field(() => String, { nullable: true })
  todoName: string;
}
