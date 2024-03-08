import { Task } from "./task";

export interface TaskContextType {
  tasks: Task[];
  totalTasks: number;
  fetchTasks: (page: number, limit: number, searchTerm: string) => void;
  createTask: (todo: Task) => Promise<void>;
  updateTask: (todo: Task) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
}
