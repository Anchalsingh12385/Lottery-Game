import { useState } from 'react'
import{ Lottery } from "./Lottery";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < h1 >Lottery Game</h1>
    <div className="ticket">
        <span>{count}</span>
        <span>{count}</span>
        <span>{count}</span>
    </div>
    
    </>
  )
}

export default App
