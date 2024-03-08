export interface Task {
  id?: string;
  titulo: string;
  descripcion: string;
  estado: string;
}

export interface TodoListProps {
  tasks: Task[];
  page: number;
  totalPages: number;
  limit: number;
  totalTasks: number;
  onPageChange: (newPage: number) => void;
  onLimitChange: (newLimit: number) => void;
}

export interface TaskTableProps {
  tasks: Task[];
}

export interface TaskProps {
  task: Task;
}
