'use client'

import { useState } from 'react'
import TextInput from '../../components/TextInput'
import TextArea from '../../components/TextArea'
import SelectDropdown from '../../components/SelectDropdown'
import RadioGroup from '../../components/RadioGroup'
import Checkbox from '../../components/Checkbox'
import Switch from '../../components/Switch'
import DatePicker from '../../components/DatePicker'
import Button from '../../components/Button'
import FormCard from '../../components/FormCard'
import TaskCard from '../../components/TaskCard'
import UserAvatar from '../../components/UserAvatar'
import Badge from '../../components/Badge'
import Modal from '../../components/Modal'
import Toast from '../../components/Toast'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'

export default function ComponentsDemo() {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [option, setOption] = useState('Option 1')
  const [radio, setRadio] = useState('A')
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)
  const [date, setDate] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <main className="space-y-8">
      <Header
        loggedIn={loggedIn}
        onLogin={() => setLoggedIn(true)}
        onLogout={() => setLoggedIn(false)}
      />

      <section>
        <h2 className="text-xl font-bold mb-2">TextInput</h2>
        <p className="mb-4">A basic text input element.</p>
        <TextInput label="Name" value={text} onChange={setText} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">TextArea</h2>
        <p className="mb-4">A multi-line text area.</p>
        <TextArea label="Message" value={message} onChange={setMessage} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">SelectDropdown</h2>
        <p className="mb-4">Choose an option from a dropdown.</p>
        <SelectDropdown
          label="Options"
          options={['Option 1', 'Option 2', 'Option 3']}
          value={option}
          onChange={setOption}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">RadioGroup</h2>
        <p className="mb-4">Pick one of the provided options.</p>
        <RadioGroup label="Choices" options={['A', 'B', 'C']} value={radio} onChange={setRadio} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Checkbox</h2>
        <p className="mb-4">Toggle a boolean value.</p>
        <Checkbox label="Accept" checked={checked} onChange={setChecked} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Switch</h2>
        <p className="mb-4">A styled toggle switch.</p>
        <Switch label="Enable" checked={switched} onChange={setSwitched} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">DatePicker</h2>
        <p className="mb-4">Select a date.</p>
        <DatePicker label="Date" value={date} onChange={setDate} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Button</h2>
        <p className="mb-4">Different button variants.</p>
        <div className="flex gap-2">
          <Button variant="primary" onClick={() => console.log('primary click')}>
            Primary
          </Button>
          <Button variant="secondary" onClick={() => console.log('secondary click')}>
            Secondary
          </Button>
          <Button variant="danger" onClick={() => console.log('danger click')}>
            Danger
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">FormCard</h2>
        <p className="mb-4">Container for form elements.</p>
        <FormCard title="Example Form">
          <TextInput label="Email" value={text} onChange={setText} />
          <Button variant="primary" onClick={() => console.log('submit')}>
            Submit
          </Button>
        </FormCard>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">TaskCard</h2>
        <p className="mb-4">Display a task description.</p>
        <TaskCard title="Buy Milk" description="Remember to buy milk" location="Store" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">UserAvatar</h2>
        <p className="mb-4">Shows user initials or avatar image.</p>
        <UserAvatar name="Jane Doe" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Badge</h2>
        <p className="mb-4">Small status label.</p>
        <div className="space-x-2">
          <Badge text="Info" variant="info" />
          <Badge text="Success" variant="success" />
          <Badge text="Error" variant="error" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Modal</h2>
        <p className="mb-4">Dialog overlay for additional info.</p>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <p>This is a modal dialog.</p>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </Modal>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Toast</h2>
        <p className="mb-4">Transient notification.</p>
        <Button variant="primary" onClick={() => setToastMsg('Saved!')}>
          Show Toast
        </Button>
        {toastMsg && (
          <div className="mt-2" onAnimationEnd={() => setToastMsg('')}>
            <Toast message={toastMsg} variant="success" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Pagination</h2>
        <p className="mb-4">Navigate between pages.</p>
        <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
      </section>
    </main>
  )
}
