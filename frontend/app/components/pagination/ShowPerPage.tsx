import { ShowPerPageProps } from '@/interfaces/paginatiom';
import React from 'react';

const ShowPerPage: React.FC<ShowPerPageProps> = ({ limit, onLimitChange }) => {
  return (
    <div className="flex justify-center">
      <span className="mr-2">Mostrar</span>
      <select
        value={limit}
        onChange={(e) => onLimitChange(Number(e.target.value))}
        className="input input-bordered w-20"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default ShowPerPage;
