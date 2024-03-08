import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TaskStatus } from 'src/modules/common/status/status.enum';

export const createTaskDocs = {
  operation: ApiOperation({ summary: 'Crear una nueva tarea' }),
  response: ApiResponse({
    status: 201,
    description: 'La tarea se ha creado exitosamente',
  }),
  body: ApiBody({
    schema: {
      type: 'object',
      properties: {
        titulo: { type: 'string' },
        descripcion: { type: 'string' },
        estado: {
          type: 'enum',
          enum: Object.values(TaskStatus),
        },
      },
      example: {
        titulo: 'Nueva tarea',
        descripcion: 'Descripción de la nueva tarea',
        estado: 'Pendiente',
      },
    },
  }),
};

export const getAllTasksDocs = {
  operation: ApiOperation({ summary: 'Obtener todas las tareas' }),
  response: ApiResponse({
    status: 200,
    description: 'Devuelve una lista de tareas',
  }),
};
export const getTaskByIdDocs = {
  operation: ApiOperation({ summary: 'Obtener una tarea por ID' }),
  responses: {
    200: {
      description: 'Devuelve la tarea con el ID especificado',
    },
    400: {
      description: 'El ID proporcionado no es válido',
    },
    404: {
      description: 'Tarea no encontrada',
    },
  },
};
export const updateTaskDocs = {
  operation: ApiOperation({ summary: 'Actualizar una tarea por ID' }),
  responses: {
    200: {
      description: 'Devuelve la tarea actualizada',
    },
    400: {
      description: 'El ID proporcionado no es válido',
    },
    404: {
      description: 'Tarea no encontrada',
    },
  },
  body: ApiBody({
    schema: {
      type: 'object',
      properties: {
        titulo: { type: 'string' },
        descripcion: { type: 'string' },
        estado: { type: 'enum', enum: Object.values(TaskStatus) },
      },
      example: {
        titulo: 'Tarea actualizada',
        descripcion: 'Descripción actualizada',
        estado: 'Pendiente',
      },
    },
  }),
};

export const deleteTaskDocs = {
  operation: ApiOperation({ summary: 'Eliminar una tarea por ID' }),
  responses: {
    200: {
      description: 'Tarea eliminada exitosamente',
    },
    400: {
      description: 'El ID proporcionado no es válido',
    },
    404: {
      description: 'Tarea no encontrada',
    },
  },
};
