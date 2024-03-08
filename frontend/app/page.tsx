"use client";
import React, { useEffect, useState } from "react";
import AddTask from "./components/task/AddTask";
import TodoList from "./components/todo/TodoList";
import { useTaskContext } from "./context/ContextProvider";

const Home: React.FC = () => {
  const { tasks, totalTasks, fetchTasks } = useTaskContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    fetchTasks(page, limit, searchTerm);
  }, [fetchTasks, page, limit, searchTerm]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };

  const handleSearchTermChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Gestión de tareas</h1>
        <AddTask />
        <input
          type="text"
          placeholder="Buscar tarea..."
          onChange={(e) => handleSearchTermChange(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <TodoList
        tasks={tasks}
        page={page}
        totalPages={Math.ceil(totalTasks / limit)}
        limit={limit}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
        totalTasks={totalTasks}
      />
    </main>
  );
};

export default Home;
