const reducer=(count, action)=>{

    switch(action.type){
        case "Inc":
        return count = count +1


        case "Dec":
            return count = count -1


        default : 
        return count


    }







}


export default reducer