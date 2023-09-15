import { useState } from 'react'
import Decouvrir from './component/decouvrir'
import "./decouvrir.css"
import TextWithAnimation from './component/filter'
import Container from "./components/Container/Container";
import { Level } from "./components/Level";
import { useState } from "react";

function App() {

  return (
    <>
      <Decouvrir></Decouvrir>
      <Container />
      <Level/>
      <useState/>
    </>
  )
}

export default App
