import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
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
  @Put(':id')
  async updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatedTaskData: Partial<TaskInterface>,
  ): Promise<TaskInterface> {
    return this._tasksService.updateTask(id, updatedTaskData);
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    const message = await this._tasksService.deleteTask(id);
    return message;
  }
}
