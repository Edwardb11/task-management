import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  async create(taskData: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepo.create(taskData);
    return await this.taskRepo.save(newTask);
  }
  async getAllTasks(): Promise<Task[]> {
    return this.taskRepo.find();
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
}
