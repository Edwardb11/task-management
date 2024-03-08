import React from "react";
import { TodoListProps } from "@/interfaces/task";
import TaskTable from "../task/TaskTable";
import PaginationControls from "../pagination/PaginationControls";
import ShowPerPage from "../pagination/ShowPerPage";

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  page,
  totalPages,
  limit,
  onPageChange,
  onLimitChange,
}) => {
  return (
    <div className="overflow-x-auto">
      <TaskTable tasks={tasks} />
      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <ShowPerPage limit={limit} onLimitChange={onLimitChange} />
    </div>
  );
};

export default TodoList;
