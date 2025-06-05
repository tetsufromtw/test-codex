import type { FC, ChangeEvent } from 'react'

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

const TextInput: FC<Props> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
  return (
    <div className="mb-4">
      <label className="label">{label}</label>
      <input className="input" type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default TextInput
