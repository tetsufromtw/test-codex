import type { FC, ChangeEvent } from 'react'

interface Props {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}

const SelectDropdown: FC<Props> = ({ label, options, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)
  return (
    <div className="mb-4">
      <label className="label">{label}</label>
      <select className="input" value={value} onChange={handleChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectDropdown
