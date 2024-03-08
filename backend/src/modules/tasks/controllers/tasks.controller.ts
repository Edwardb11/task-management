import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TasksService } from '../services/tasks.service';
import { CreateOrUpdateTaskDto } from '../dto/task.dto';
import { TaskInterface } from '../interfaces/task.interface';
import {
  createTaskDocs,
  getAllTasksDocs,
  getTaskByIdDocs,
  updateTaskDocs,
  deleteTaskDocs,
} from '../doc/tasks.docs';

@ApiTags('tareas')
@Controller('tasks')
export class TasksController {
  constructor(private _tasksService: TasksService) {}

  @Post()
  @createTaskDocs.operation
  @createTaskDocs.response
  @createTaskDocs.body
  async createTask(
    @Body() createTaskDto: CreateOrUpdateTaskDto,
  ): Promise<TaskInterface> {
    return this._tasksService.create(createTaskDto);
  }

  @Get()
  @getAllTasksDocs.operation
  @getAllTasksDocs.response
  async getAllTasks(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('searchTerm') searchTerm?: string,
  ): Promise<TaskInterface[]> {
    return this._tasksService.getAllTasks(page, limit, searchTerm);
  }

  @Get(':id')
  @getTaskByIdDocs.operation
  @ApiResponse(getTaskByIdDocs.responses[200])
  @ApiResponse(getTaskByIdDocs.responses[400])
  @ApiResponse(getTaskByIdDocs.responses[404])
  async getTaskById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<TaskInterface> {
    return this._tasksService.getTaskById(id);
  }

  @Put(':id')
  @updateTaskDocs.operation
  @ApiResponse(getTaskByIdDocs.responses[200])
  @ApiResponse(getTaskByIdDocs.responses[400])
  @ApiResponse(getTaskByIdDocs.responses[404])
  @updateTaskDocs.body
  async updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatedTaskData: Partial<TaskInterface>,
  ): Promise<TaskInterface> {
    return this._tasksService.updateTask(id, updatedTaskData);
  }

  @Delete(':id')
  @deleteTaskDocs.operation
  @ApiResponse(getTaskByIdDocs.responses[200])
  @ApiResponse(getTaskByIdDocs.responses[400])
  @ApiResponse(getTaskByIdDocs.responses[404])
  async deleteTask(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    const message = await this._tasksService.deleteTask(id);
    return message;
  }
}
