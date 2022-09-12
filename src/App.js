import './App.css';
import { useState } from 'react';
import Title from './components/Title'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState(
    [
      {title: "some event", id: 1},
      {title: "some other event", id: 2},
      {title: "one more event", id: 3}
    ])

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  const sub = "Some subtitle"

  return (
    <div className="App">
      <Title title="Some title" subtitle={sub}/>
      <Title title="Another title" subtitle="Another subtitle"/>

      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>)}
      {showEvents && events.map((event, index) =>(
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
