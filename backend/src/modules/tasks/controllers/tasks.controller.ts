import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateOrUpdateTaskDto } from '../dto/task.dto';
import { TaskInterface } from '../interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private _tasksService: TasksService) {}

  @Post()
  async createTask(
    @Body() createTaskDto: CreateOrUpdateTaskDto,
  ): Promise<TaskInterface> {
    return this._tasksService.create(createTaskDto);
  }

  @Get()
  async getAllTasks(): Promise<TaskInterface[]> {
    return this._tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<TaskInterface> {
    return this._tasksService.getTaskById(id);
  }
}