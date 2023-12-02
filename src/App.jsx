import { useState } from 'react'
import Dashboard from './components/Main/SettingsData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
