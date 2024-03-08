export interface TaskInterface {
  id: string;
  titulo: string;
  descripcion: string;
  estado: string;
}

export interface TaskWithTotal {
  tasks: TaskInterface[];
  total: number;
}
