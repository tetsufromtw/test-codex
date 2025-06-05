import type { FC } from 'react'
import Button from './Button'

interface Props {
  loggedIn: boolean
  onLogin: () => void
  onLogout: () => void
}

const Header: FC<Props> = ({ loggedIn, onLogin, onLogout }) => (
  <header className="flex justify-between items-center mb-6">
    <h1 className="text-xl font-bold">Demo</h1>
    {loggedIn ? (
      <Button variant="secondary" onClick={onLogout}>
        Logout
      </Button>
    ) : (
      <Button variant="primary" onClick={onLogin}>
        Login
      </Button>
    )}
  </header>
)

export default Header
