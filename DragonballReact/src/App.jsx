import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './assets/Characters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Dragon Ball API</h1>
      <section>
        <Characters />
      </section>
    </>
  )
}

export default App
