import { useCallback, useState } from "react"
import  TodoApp from "./todo"



export const CounterApp=()=>{

    const [number, setNumber] = useState(0)
    
    const [todos,setTodos] = useState([])
    

    const handleIncrement=()=>{
        setNumber((val)=> val+1)
    }


    const handletodo=useCallback(()=>{

        setTodos((alldata)=>{
            return [...alldata, "AKIB Ali" , "Sohil khan"]
        })
    },[todos])
    

   

    





    return(
        <div>
            <h1>Value Counter :{number}</h1>
            <button onClick={handleIncrement}>Increment</button>

             <TodoApp handletodo={handletodo} todos={todos}/>


            
        </div>
    )
}