import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('Manchester')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('Manchester')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Location</span>
        <select
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        >
          <option value="Manchseter">Manchester</option>
          <option value="London">London</option>
          <option value="Cardif">Cardif</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
