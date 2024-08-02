import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoInput: CreateTodoInput) {
    return await this.prisma.todo.create({
      data: {
        ...createTodoInput,
      },
    });
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(todoId: string) {
    return await this.prisma.todo.findFirst({
      where: {
        todoId: todoId,
      },
    });
  }

  async update(updateTodoInput: UpdateTodoInput) {
    return await this.prisma.todo.update({
      where: {
        todoId: updateTodoInput.todoId,
      },
      data: {
        ...updateTodoInput,
        todoId: undefined,
      },
    });
  }

  async remove(todoId: string) {
    return await this.prisma.todo.delete({
      where: {
        todoId: todoId,
      },
    });
  }
}
