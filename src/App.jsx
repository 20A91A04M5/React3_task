import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './data'
import Prop from './prop'
import Button from './Button'

function App() {
  const styles={
    color:"white",
    backgroundColor:"green"
  }
  
  return (
    <>
    <h1>
      Props
    </h1>
    <Button value="Goo" style={styles} />
    <Prop data={data} />
    </>
  )
}

export default App
