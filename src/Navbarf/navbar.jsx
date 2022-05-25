

import react, { useContext } from "react"
import { AppContex } from "../AppContext/Contextprovider"
import style from "./navbar.module.css"
//console.log(style)
export  const Navbar =()=>{
    const [theme,toggletheme]=useContext(AppContex)
    console.log(theme,"navbar")
    return(
       
        <div className={`${style.B}
        ${theme==="light" ? style.d  : style.l  }`}>
            <button onClick={toggletheme} className={style.button}>clickme</button>
        
        </div>
        
       
       
    )
    
  
        
}