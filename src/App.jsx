import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './Button/Button'
import { AppContex } from './AppContext/Contextprovider'
import { Navbar } from './Navbarf/navbar'
import { ImageDiv } from './images/imagediv'

function App() {
 
const [theme,toggleTheme]=useContext(AppContex)
//console.log("app",theme)
  return (
    <div className="App">
      <Navbar/>
     
     
     <div className='div'>
       
      <Button text={"Theme"}/>
      <ImageDiv></ImageDiv>
     </div>
     {/* // <button onClick={toggleTheme}>toggle</button> */}
      

    
    </div>
  )
}

export default App
