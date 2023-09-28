import { useState } from 'react'
import NewComp from './comp/newComp'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewComp/>
        </>
  )
}

export default App
