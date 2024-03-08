"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Task } from "@/interfaces/task";
import {
  getAllTodos,
  addTodo,
  editTodo,
  deleteTodo,
} from "@/app/actions/todoActions";
import { TaskContextType } from "@/interfaces/context";

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);

  const fetchTasks = async (
    page: number,
    limit: number,
    searchTerm: string
  ) => {
    const { tasks: fetchedTasks, total } = await getAllTodos(
      page,
      limit,
      searchTerm
    );
    setTasks(fetchedTasks);
    setTotalTasks(total);
  };

  const createTask = async (todo: Task) => {
    await addTodo(todo);
    fetchTasks(1, 10, "");
  };

  const updateTask = async (todo: Task) => {
    await editTodo(todo);
    fetchTasks(1, 10, "");
  };

  const removeTask = async (id: string) => {
    await deleteTodo(id);
    fetchTasks(1, 10, "");
  };

  useEffect(() => {
    fetchTasks(1, 10, "");
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        totalTasks,
        fetchTasks,
        createTask,
        updateTask,
        removeTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error(
      "useTaskContext debe ser utilizado dentro de un TaskProvider"
    );
  }
  return context;
};
