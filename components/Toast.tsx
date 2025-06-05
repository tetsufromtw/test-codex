import type { FC } from 'react';

interface Props {
  message: string;
  variant: 'success' | 'error' | 'info';
}

const Toast: FC<Props> = ({ message, variant }) => {
  const colorClass =
    variant === 'success'
      ? 'bg-blue-550'
      : variant === 'error'
        ? 'bg-red-550'
        : 'bg-blue-500';
  const icon = variant === 'success' ? '✔️' : variant === 'error' ? '❌' : 'ℹ️';

  return (
    <div
      className={`text-white px-4 py-2 rounded-md flex items-center gap-2 ${colorClass}`}
    >
      <span>{icon}</span>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
