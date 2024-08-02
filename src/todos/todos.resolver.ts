import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { TodoMutationResponse, TodoResponse } from './dto/todo.response';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver()
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}
  @Mutation(() => TodoMutationResponse)
  async createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    try {
      const data = await this.todosService.create(createTodoInput);

      return {
        status: true,
        data: data,
      };
    } catch (err) {
      return {
        status: false,
        error: err?.message,
      };
    }
  }


  @Query(() => [TodoResponse], { name: 'todos' })
    findAll() {
    return this.todosService.findAll();
  }

  @Query(() => TodoResponse, { name: 'todo', nullable: true })
  findOne(@Args('todoId', { type: () => String }) todoId: string) {
    return this.todosService.findOne(todoId);
  }

  @Mutation(() => TodoMutationResponse)
  async updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ) {
    try {
      const data = await this.todosService.update(updateTodoInput);

      return {
        status: true,
        data: data,
      };
    } catch (err) {
      return {
        status: false,
        error: err?.message,
      };
    }
  }

  @Mutation(() => TodoMutationResponse)
  async removeTodo(@Args('todoId', { type: () => String }) todoId: string) {
    try {
      const data = await this.todosService.remove(todoId);

      return {
        status: true,
        data: data,
      };
    } catch (err) {
      return {
        status: false,
        error: err?.message,
      };
    }
  }
}
