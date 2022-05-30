import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './component/navbar'
import { Logincheck } from './component/loginstatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <Navbar>
  
      </Navbar>
      <Logincheck></Logincheck>
     
      
   
    </div>
  )
}

export default App
