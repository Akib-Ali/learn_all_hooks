import { memo } from "react"
const TodoApp=({todos,handletodo})=>{
    console.log("Todo App")






    return(

        <div>
            <h1>Todo App</h1>

            
            <button onClick={handletodo}>Submit Todo</button>

            {todos.map((elem,index)=>  <h1 key={index}>{elem}</h1>)}
        </div>
    )
}

export default memo(TodoApp)