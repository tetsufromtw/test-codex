import type { FC, ChangeEvent } from 'react'

interface Props {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}

const Checkbox: FC<Props> = ({ label, checked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)
  return (
    <label className="inline-flex items-center gap-2 mb-4">
      <input type="checkbox" className="border" checked={checked} onChange={handleChange} />
      <span className="label m-0">{label}</span>
    </label>
  )
}

export default Checkbox
