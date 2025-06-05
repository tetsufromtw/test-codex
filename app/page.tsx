"use client"

import { useState } from "react"
import Badge from "../components/Badge"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import DatePicker from "../components/DatePicker"
import FormCard from "../components/FormCard"
import Header from "../components/Header"
import Modal from "../components/Modal"
import Pagination from "../components/Pagination"
import RadioGroup from "../components/RadioGroup"
import SelectDropdown from "../components/SelectDropdown"
import Switch from "../components/Switch"
import TaskCard from "../components/TaskCard"
import TextArea from "../components/TextArea"
import TextInput from "../components/TextInput"
import Toast from "../components/Toast"
import UserAvatar from "../components/UserAvatar"

export default function Page() {
  const [text, setText] = useState("")
  const [message, setMessage] = useState("")
  const [option, setOption] = useState("Option 1")
  const [radio, setRadio] = useState("A")
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)
  const [date, setDate] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <main className="space-y-8">
      <h2>Badge</h2>
      <div className="preview p-4 space-x-2">
        <Badge text="Info" variant="info" />
        <Badge text="Success" variant="success" />
        <Badge text="Error" variant="error" />
      </div>

      <h2>Button</h2>
      <div className="preview p-4 flex gap-2">
        <Button variant="primary" onClick={() => console.log("primary")}>Primary</Button>
        <Button variant="secondary" onClick={() => console.log("secondary")}>Secondary</Button>
        <Button variant="danger" onClick={() => console.log("danger")}>Danger</Button>
      </div>

      <h2>Checkbox</h2>
      <div className="preview p-4">
        <Checkbox label="Accept" checked={checked} onChange={setChecked} />
      </div>

      <h2>DatePicker</h2>
      <div className="preview p-4">
        <DatePicker label="Date" value={date} onChange={setDate} />
      </div>

      <h2>FormCard</h2>
      <div className="preview p-4">
        <FormCard title="Example Form">
          <TextInput label="Email" value={text} onChange={setText} />
          <Button variant="primary" onClick={() => console.log("submit")}>Submit</Button>
        </FormCard>
      </div>

      <h2>Header</h2>
      <div className="preview p-4">
        <Header loggedIn={loggedIn} onLogin={() => setLoggedIn(true)} onLogout={() => setLoggedIn(false)} />
      </div>

      <h2>Modal</h2>
      <div className="preview p-4">
        <Button variant="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <p>This is a modal dialog.</p>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>Close</Button>
        </Modal>
      </div>

      <h2>Pagination</h2>
      <div className="preview p-4">
        <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
      </div>

      <h2>RadioGroup</h2>
      <div className="preview p-4">
        <RadioGroup label="Choices" options={["A", "B", "C"]} value={radio} onChange={setRadio} />
      </div>

      <h2>SelectDropdown</h2>
      <div className="preview p-4">
        <SelectDropdown label="Options" options={["Option 1", "Option 2", "Option 3"]} value={option} onChange={setOption} />
      </div>

      <h2>Switch</h2>
      <div className="preview p-4">
        <Switch label="Enable" checked={switched} onChange={setSwitched} />
      </div>

      <h2>TaskCard</h2>
      <div className="preview p-4">
        <TaskCard title="Buy Milk" description="Remember to buy milk" location="Store" />
      </div>

      <h2>TextArea</h2>
      <div className="preview p-4">
        <TextArea label="Message" value={message} onChange={setMessage} />
      </div>

      <h2>TextInput</h2>
      <div className="preview p-4">
        <TextInput label="Name" value={text} onChange={setText} />
      </div>

      <h2>Toast</h2>
      <div className="preview p-4">
        <Button variant="primary" onClick={() => setToastMsg("Saved!")}>Show Toast</Button>
        {toastMsg && (
          <div className="mt-2" onAnimationEnd={() => setToastMsg("")}> 
            <Toast message={toastMsg} variant="success" />
          </div>
        )}
      </div>

      <h2>UserAvatar</h2>
      <div className="preview p-4">
        <UserAvatar name="Jane Doe" />
      </div>
    </main>
  )
}
