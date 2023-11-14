import { useState } from 'react'
import Header from "./components/header"
import Home from "./components/home"
import './App.css'

function App() {
  const [darkmode, setMode] = useState(false);

  return (
    <>
     <Header mode={darkmode} setMode={setMode}/>
     <Home mode={darkmode}/>
    </>
  )
}

export default App
