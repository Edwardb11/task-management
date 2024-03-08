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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from '../services/tasks.service';
import { CreateOrUpdateTaskDto } from '../dto/task.dto';
import { TaskInterface } from '../interfaces/task.interface';

@ApiTags('tareas')
@Controller('tasks')
export class TasksController {
  constructor(private _tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({
    status: 201,
    description: 'La tarea se ha creado exitosamente',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        titulo: { type: 'string' },
        descripcion: { type: 'string' },
        estado: { type: 'string' },
      },
      example: {
        titulo: 'Nueva tarea',
        descripcion: 'Descripción de la nueva tarea',
        estado: 'Pendiente',
      },
    },
  })
  async createTask(
    @Body() createTaskDto: CreateOrUpdateTaskDto,
  ): Promise<TaskInterface> {
    return this._tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({
    status: 200,
    description: 'Devuelve una lista de tareas',
  })
  async getAllTasks(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('searchTerm') searchTerm?: string,
  ): Promise<TaskInterface[]> {
    return this._tasksService.getAllTasks(page, limit, searchTerm);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una tarea por ID' })
  @ApiResponse({
    status: 200,
    description: 'Devuelve la tarea con el ID especificado',
  })
  @ApiResponse({ status: 400, description: 'El ID proporcionado no es válido' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  async getTaskById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<TaskInterface> {
    return this._tasksService.getTaskById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una tarea por ID' })
  @ApiResponse({
    status: 200,
    description: 'Devuelve la tarea actualizada',
  })
  @ApiResponse({ status: 400, description: 'El ID proporcionado no es válido' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        titulo: { type: 'string' },
        descripcion: { type: 'string' },
        estado: { type: 'string' },
      },
      example: {
        titulo: 'Tarea actualizada',
        descripcion: 'Descripción actualizada',
        estado: 'Pendiente',
      },
    },
  })
  async updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatedTaskData: Partial<TaskInterface>,
  ): Promise<TaskInterface> {
    return this._tasksService.updateTask(id, updatedTaskData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una tarea por ID' })
  @ApiResponse({ status: 200, description: 'Tarea eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'El ID proporcionado no es válido' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  async deleteTask(@Param('id', ParseUUIDPipe) id: string): Promise<string> {
    const message = await this._tasksService.deleteTask(id);
    return message;
  }
}
