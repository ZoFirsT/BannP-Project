import { useState } from 'react'
import PreLoader from './components/preloader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <PreLoader/>
        <p>
        Main
        </p>
      </div>
    </>
  )
}
//swasdee
export default App
