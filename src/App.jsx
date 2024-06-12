import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './components/Main/Main';
import Booking from './components/Booking/Booking';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
