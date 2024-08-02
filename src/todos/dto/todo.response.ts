import { Field, ObjectType } from '@nestjs/graphql';
import { Todo } from '../entities/todo.entity';
import MutationResponse from './mutation.response';

@ObjectType()
export class TodoResponse extends Todo {
  @Field(() => Number, { nullable: true })
  total: number;
}

@ObjectType()
export class TodoMutationResponse extends MutationResponse(
  TodoResponse,
  String,
) {}
