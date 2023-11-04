import { useState } from 'react'
import Header from "./components/header"
import Home from "./components/home"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
    </>
  )
}

export default App
