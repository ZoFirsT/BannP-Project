import { useState } from 'react'
import Managestore from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Managestore/>
    </>
  )
}

export default App
