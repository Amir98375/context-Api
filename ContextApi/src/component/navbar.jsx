import { useContext } from "react"
import { AuthContext } from "./context/context"


const Navbar=()=>{
    const {Auth,Authtoggle} =useContext(AuthContext)
   // console.log(Auth,Authtoggle)
    return(
       <nav style={{"border" : "1px solid red" }}>
              <li style={{listStyleType:"none"}}></li>
            <button style={
                {"height":"50px",
            "width":"100px",
        "background-color":"blue",
    "color":"white",
"borderRadius":"15px"}
            } onClick={Authtoggle} >
           
             {Auth? "logout":"login"}
            </button>
            
           
       </nav>
    )
}
export {Navbar}