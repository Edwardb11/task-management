import { getAllTodos } from "./actions/todoActions";
import AddTask from "./components/task/AddTask";
import TodoList from "./components/todo/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Gestión de tareas</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}