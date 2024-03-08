import { Task } from "@/interfaces/task";

const baseUrl = "http://localhost:8000";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};
