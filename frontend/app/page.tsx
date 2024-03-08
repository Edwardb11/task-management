"use client";
import React, { useEffect, useState } from "react";
import { getAllTodos } from "./actions/todoActions";
import AddTask from "./components/task/AddTask";
import TodoList from "./components/todo/TodoList";
import { Task as ITask } from "@/interfaces/task";

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    const loadTasks = async () => {
      const { tasks: loadedTasks, total } = await getAllTodos(
        page,
        limit,
        searchTerm
      );
      setTasks(loadedTasks);
      setTotalTasks(total);
    };

    loadTasks();
  }, [page, limit, searchTerm]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const handleSearchTermChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setPage(1); 
  };

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Gestión de tareas</h1>
        <AddTask />
        <input
          type="text"
          placeholder="Buscar tarea..."
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)} 
          className="input input-bordered"
        />
      </div>
      <TodoList
        totalPages={totalTasks}
        tasks={tasks}
        page={page}
        limit={limit}
        totalTasks={totalTasks}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />
    </main>
  );
}
