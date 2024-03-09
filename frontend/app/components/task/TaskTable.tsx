import React from "react";
import Task from "../task/Task";
import { TaskTableProps } from "@/interfaces/task";

const TaskTable: React.FC<TaskTableProps> = ({ tasks }) => {
  if (!tasks) {
    return <div>Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th className="text-left">Tareas</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
