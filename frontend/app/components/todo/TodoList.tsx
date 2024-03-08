import { Task } from "@/interfaces/task";
import React from "react";

interface TodoListProps {
  tasks: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tareas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default TodoList;
