import { useReducer } from "react";

const initialState ={

}

const counterActions ={
    increament:"increament",
    decreament:"decreament",
    reset:"reset"

};

const reducer =(state,action)=>{
 
    switch(action.type){
        case counterActions.increament:{
            return{
                ...state,
            counter:state.counter+1
            };
            
        }
        case counterActions.decreament:{
            return{
                ...state,
            counter:state.counter-1
            };
            
        }
        case counterActions.reset:{
            return{
                
              ....state,

         
            };
            
        }
    }


}

export const Counter=()=>{
const [state,dispatch]=useReducer(reducer,initialState)
return(
    <div>
        <h2>Count:{state.counter}</h2>
        <h2>onclick Count:{state.counter}</h2>
   <button 
   onClick={()=>
    dispatch({
        counterActions.increament
    })

 }>
     Add
 </button>
 <button 
   onClick={()=>
    dispatch({
        counterActions.decreament
    })

 }>
     Dec
 </button>

   
    </div>
)

}