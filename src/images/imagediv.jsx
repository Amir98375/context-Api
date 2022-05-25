import { useContext } from "react"
import { AppContex } from "../AppContext/Contextprovider"
import style from "./image.module.css"

export const ImageDiv=()=>{
    const [theme] =useContext(AppContex)
    return(
        <button className={`${style.buttonBase} 
        ${theme==="light" ? style.buttonlight :style.buttondark}`}>
          
        </button>
    )
}