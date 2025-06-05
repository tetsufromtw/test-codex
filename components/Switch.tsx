import type { FC, ChangeEvent } from 'react'

interface Props {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}

const Switch: FC<Props> = ({ label, checked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)
  return (
    <label className="inline-flex items-center gap-2 mb-4">
      <span className="label m-0">{label}</span>
      <input
        type="checkbox"
        className="h-5 w-10 rounded-full appearance-none bg-gray-300 checked:bg-blue-550 relative"
        checked={checked}
        onChange={handleChange}
      />
    </label>
  )
}

export default Switch
