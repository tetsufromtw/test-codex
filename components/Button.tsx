import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant: 'primary' | 'danger' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<Props> = ({ children, variant, onClick, disabled }) => {
  const variantClass =
    variant === 'primary'
      ? 'button-primary'
      : variant === 'danger'
        ? 'button-danger'
        : 'button-secondary';
  return (
    <button
      className={`button ${variantClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
