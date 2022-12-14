import { useMemo, useState } from "react";
import { memo } from "react";

export const TodoApp=()=>{

 const[number,setNumber] = useState(0)
 const[inputvalue,Setinputvalue] = useState("")
 const [todo,settodos] = useState([])

    const handleCounter=()=>{
        setNumber(number+1)
    }

    const isEven=useMemo(()=>{
        console.log(`Only relation Counter function ${number} `)
        return number % 2 == 0
        
    },[number])

    const handleInput=(e)=>{

        Setinputvalue(e.target.value)
    }




    const handleSubmit=()=>{

        settodos((alltodos)=>{

            return[...alltodos,inputvalue]

            
            
        })
        

    }




    return(


        <div>
           
          <h3>{`${number} is ${isEven ? "Even Number" : "Odd Number" } `}</h3>
          <button style={{color:"white" , backgroundColor:"red"}} onClick={handleCounter}>{`Counter Value - ${number}`}</button> <br></br> <br></br>
          Name:{} 
          <input type="text" placeholder="Enter Your Name"  onChange={handleInput}/><br></br>
          <button style={{color:"white" , backgroundColor:"black"}} onClick={handleSubmit}>Submit</button>

        {todo.map((elem,index)=>{

            return(
                <h1 key={index}>{elem}</h1>
            )
        })}
        </div>
    )






}