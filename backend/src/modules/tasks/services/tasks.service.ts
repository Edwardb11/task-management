import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { Repository, FindManyOptions, Like } from 'typeorm';
import { TaskWithTotal } from '../interfaces/task.interface';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  async create(taskData: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepo.create(taskData);
    return await this.taskRepo.save(newTask);
  }

  async getAllTasks(
    page = 1,
    limit = 10,
    searchTerm?: string,
  ): Promise<TaskWithTotal> {
    const skip = (page - 1) * limit;
    const options: FindManyOptions<Task> = {
      skip,
      take: limit,
    };

    if (searchTerm) {
      options.where = [
        { titulo: Like(`%${searchTerm}%`) },
        { descripcion: Like(`%${searchTerm}%`) },
      ];
    }

    const [tasks, total] = await this.taskRepo.findAndCount(options);

    return { tasks, total };
  }
  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepo.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async updateTask(id: string, updatedTaskData: Partial<Task>): Promise<Task> {
    const task = await this.taskRepo.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    Object.assign(task, updatedTaskData);

    return this.taskRepo.save(task);
  }

  async deleteTask(id: string): Promise<string> {
    const task = await this.taskRepo.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    await this.taskRepo.remove(task);
    return `Task with ID ${id} has been deleted successfully`;
  }
}
