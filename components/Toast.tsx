import type { FC } from 'react'

interface Props {
  message: string
  variant: 'success' | 'error'
}

const Toast: FC<Props> = ({ message, variant }) => {
  const className = variant === 'success' ? 'bg-blue-550' : 'bg-red-550'
  return <div className={`text-white px-4 py-2 rounded-md ${className}`}>{message}</div>
}

export default Toast
