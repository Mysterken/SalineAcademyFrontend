import { useState } from 'react'
import Decouvrir from './component/decouvrir'
import "./decouvrir.css"
import TextWithAnimation from './component/filter'
import Container from "./components/Container/";
import { Level } from "./components/Level";

function App() {

  return (
    <>
      {/* <Decouvrir></Decouvrir> */}
      <Container />
      <Level/>
      <useState/>
    </>
  )
}

export default App
