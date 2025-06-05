import type { FC, ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const FormCard: FC<Props> = ({ title, children }) => (
  <div className="card space-y-2">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </div>
)

export default FormCard
