import { useState } from 'react'
<<<<<<< HEAD
// import "./decouvrir.css"
import Container from "./components/Container/";
import { Level } from "./components/Level";

function App() {

  return (
    <>
      <Container />
      <Level/>
      <useState/>
=======
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';



function App() {
  
  const [count, setCount] = useState(0)

  return (

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>

>>>>>>> 5c0991139eeee72ba845649695f4732345e0bcc0
    </>
  )
}

export default App
