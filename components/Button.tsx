import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant: 'primary' | 'danger' | 'secondary'
  onClick: () => void
}

const Button: FC<Props> = ({ children, variant, onClick }) => {
  const variantClass =
    variant === 'primary'
      ? 'button-primary'
      : variant === 'danger'
      ? 'button-danger'
      : 'button-secondary'
  return (
    <button className={`button ${variantClass}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
