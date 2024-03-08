import AddTask from "./components/task/AddTask";
import TodoList from "./components/todo/TodoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Gestión de tareas</h1>
        <AddTask />
      </div>
      <TodoList
        tasks={[
          {
            id: "1",
            titulo: "Tarea 1",
            descripcion: "Descripción de la tarea 1",
          },
        ]}
      />
    </main>
  );
}
