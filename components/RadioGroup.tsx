import type { FC, ChangeEvent } from 'react'

interface Props {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}

const RadioGroup: FC<Props> = ({ label, options, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
  return (
    <div className="mb-4">
      <span className="label">{label}</span>
      <div className="flex gap-4 mt-1">
        {options.map((opt) => (
          <label key={opt} className="inline-flex items-center gap-1">
            <input
              type="radio"
              className="border"
              value={opt}
              checked={value === opt}
              onChange={handleChange}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
