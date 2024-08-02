import { Module } from '@nestjs/common';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TodosResolver, TodosService, PrismaService]
})
export class TodosModule {}
