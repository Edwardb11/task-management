export interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export interface ShowPerPageProps {
  limit: number;
  onLimitChange: (newLimit: number) => void;
}
