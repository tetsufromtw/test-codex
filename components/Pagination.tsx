import type { FC } from 'react'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <div className="flex gap-2">
      {pages.map((p) => (
        <button
          key={p}
          className={`px-3 py-1 border rounded-md ${p === currentPage ? 'bg-blue-550 text-white' : 'bg-white'}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
    </div>
  )
}

export default Pagination
