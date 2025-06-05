import type { FC, ChangeEvent } from 'react'

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

const TextArea: FC<Props> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)
  return (
    <div className="mb-4">
      <label className="label">{label}</label>
      <textarea className="input h-24" value={value} onChange={handleChange} />
    </div>
  )
}

export default TextArea
