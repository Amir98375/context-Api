import { useContext } from "react"
import { AppContex } from "../AppContext/Contextprovider"
import style from "./button.module.css"


export const Button =({text})=>{
    const [theme] =useContext(AppContex)
    //console.log(theme)
    return(
        <button className={`${style.buttonBase} 
        ${theme==="light" ? style.buttonlight :style.buttondark}`}>
        
        </button>
    )
}