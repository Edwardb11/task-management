import { PaginationControlsProps } from "@/interfaces/paginatiom";
import React from "react";

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center my-4">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="btn mr-2">
        Anterior
      </button>
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="btn ml-2">
        Siguiente
      </button>
    </div>
  );
};

export default PaginationControls;
