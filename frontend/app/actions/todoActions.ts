import { Task } from "@/interfaces/task";

const baseUrl = "http://localhost:8000";
export const getAllTodos = async (
  page: number,
  limit: number,
  searchTerm: string
): Promise<{ tasks: Task[]; total: number }> => {
  const res = await fetch(
    `${baseUrl}/tasks?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
    { cache: "no-store" }
  );
  const { tasks, total }: { tasks: Task[]; total: number } = await res.json();
  return { tasks, total };
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
