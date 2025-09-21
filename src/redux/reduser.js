import { nanoid } from "nanoid"
const initialState={
    tasks:[],
    newTaskName:"",
    filter:""
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
        case "Rename":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                task.id === action.payload.id
                    ? { ...task, task: action.payload.name }
                    : task
                )
            };
              
        case "NewName":
            return{
                ...state,
                newTaskName:action.payload
            }
        case "Filter":
            return{
                ...state,
                filter:action.payload
            }
        default:
            return state
    }
}
export default reducer