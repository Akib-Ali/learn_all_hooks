import { useReducer } from "react"
import reducer from "./reducer";
export const UseReducerMain=()=>{

    const initialstate = 0;

    const [count, dispatch] = useReducer(reducer,initialstate)



    return(

        <div>
        <h1>Welcome To Counter App</h1>
        <h2>Counter Value :{count}</h2>
        <button onClick={()=> dispatch({type : "Inc"})}>Increment Value</button>
        <button onClick={()=> dispatch({type : "Dec"})}>Decrement Value</button>
        </div>
    )
}