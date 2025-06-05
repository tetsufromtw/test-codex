import type { FC } from 'react'

interface Props {
  title: string
  description: string
  location: string
}

const TaskCard: FC<Props> = ({ title, description, location }) => (
  <div className="card space-y-1">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{description}</p>
    <p className="text-sm text-gray-500">{location}</p>
  </div>
)

export default TaskCard
