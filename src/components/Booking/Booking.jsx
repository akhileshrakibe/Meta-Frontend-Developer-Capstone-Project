import "./Booking.css";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Message from "../Message/Message";

import { useState, useEffect } from "react";

function Booking() {
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [bookdate, setBookdate] = useState("");
  const [booktime, setBooktime] = useState("");
  const [quantity, setQuantity] = useState("");
  const [occasion, setOccasion] = useState("");
  const [msg, setMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setMsg(true);
    setFirstname("")
    setLastname("")
    setBookdate("")
    setBooktime("")
    setQuantity("")
    setOccasion("")
  }

  const msgClose = (val) => {
    setMsg(val);
  }

  useEffect(() => console.log("Component rendered"))

  return (
    <>
      <Nav />
      <section></section>

      <section className="booking">
        {msg && <Message msgClose={msgClose} />}

        <h1>Reservation</h1>
        
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            value={firstname}
            id="firstname"
            placeholder="Firstname"
            required
            onChange={(e) => setFirstname(e.target.value)}
          />

          <input
            type="text"
            name="lastname"
            value={lastname}
            id="lastname"
            placeholder="Lastname"
            required
            onChange={(e) => setLastname(e.target.value)}
          />

          <input
            type="date"
            aria-label="Date"
            name="bookdate"
            value={bookdate}
            id="bookdate"
            data-testid="select-date"
            required
            onChange={(e) => setBookdate(e.target.value)}
          />

          <input
            data-testid="select-time"
            type="time"
            name="booktime"
            value={booktime}
            id="booktime"
            
            required
            onChange={(e) => setBooktime(e.target.value)}
          />

          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            min="1"
            max="10"
            placeholder="No. of Guests"
            required
            onChange={(e) => setQuantity(e.target.value)}
          />

          <select
            name="occasions"
            id="occasions"
            data-testid="select"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option data-testid="select-option" value="1">No occasions</option>
            <option data-testid="select-option" value="2">Birthday</option>
            <option data-testid="select-option" value="3">Anniversary</option>
          </select>

          <button
              type="submit"
              className="sub-btn"
            >
            Submit
          </button>

        </form>
      </section>

      <Footer />
    </>
  );
}

export default Booking;
