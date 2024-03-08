import TodoList from "./components/todo/TodoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <TodoList tasks={[]} />
    </main>
  );
}
