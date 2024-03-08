import { Injectable } from '@nestjs/common';
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
}
