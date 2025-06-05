import type { FC } from 'react'

interface Props {
  name: string
  avatarUrl?: string
}

const UserAvatar: FC<Props> = ({ name, avatarUrl }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return avatarUrl ? (
    <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full" />
  ) : (
    <div className="w-10 h-10 rounded-full bg-blue-550 text-white flex items-center justify-center">
      {initials}
    </div>
  )
}

export default UserAvatar
