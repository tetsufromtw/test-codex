import type { FC } from 'react'

interface Props {
  text: string
  variant: 'info' | 'success' | 'error'
}

const Badge: FC<Props> = ({ text, variant }) => {
  const classMap = {
    info: 'badge-info',
    success: 'badge-success',
    error: 'badge-error',
  }[variant]

  return <span className={`badge ${classMap}`}>{text}</span>
}

export default Badge
