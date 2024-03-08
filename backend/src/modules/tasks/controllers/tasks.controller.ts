import { Body, Controller, Post } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateOrUpdateTaskDto } from '../dto/task.dto';
import { Task } from '../entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private _tasksService: TasksService) {}

  @Post()
  async createTask(
    @Body() createTaskDto: CreateOrUpdateTaskDto,
  ): Promise<Task> {
    return this._tasksService.create(createTaskDto);
  }
}
