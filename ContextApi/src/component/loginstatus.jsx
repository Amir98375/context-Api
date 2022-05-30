import { useContext } from "react"
import { AuthContext } from "./context/context"


const Logincheck=()=>{
    const {Auth,token}= useContext(AuthContext)
   // console.log(Auth,token)
return(
    <div>
        {Auth? "user is logged in": "user is not logged in"}
        <br></br>
        {Auth ? `token:${token}`:null}
    </div>
)
}
export {Logincheck}