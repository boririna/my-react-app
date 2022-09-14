import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';


function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState(
    [
      {title: "some event", id: 1},
      {title: "some other event", id: 2},
      {title: "one more event", id: 3}
    ])

  console.log(showEvents)

  const handleClose = () => {
    setShowModal(false)
  }

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

      {showEvents && (<EventList events={events} handleClick={handleClick}/>)}

      {/* {showEvents && events.map((event, index) =>(
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </React.Fragment>
      ))} */}
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit nam et reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
      </Modal>}
      <div>
        <button onClick={() => setShowModal(true)}>Open modal</button>
      </div>
    </div>
  );
}

export default App;
