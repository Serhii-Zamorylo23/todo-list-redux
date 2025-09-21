import { nanoid } from "nanoid"
const initialState={
    tasks:[],
}

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case"Add":
            return{
                ...state,
                tasks:[...state.tasks,{
                    id:nanoid(),
                    task:action.payload
                }]
            }
        case"Delete":
            return{
                ...state,
                tasks:state.tasks.filter(task => task.id !==action.payload)
            }
        default:
            return state
    }
}
export default reducer