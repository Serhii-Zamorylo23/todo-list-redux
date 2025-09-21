import { useDispatch, useSelector } from "react-redux"
const RenameModal=({close,id})=>{
    const dispatch=useDispatch()
    const idTask=id
    const rename=(e)=>{
        e.preventDefault()
        const name=e.target.elements.RenameTask.value
        dispatch({
            type: "Rename",
            payload: {
              id: idTask,
              name: name
            }
          });
        close(prev=>!prev)
    }
    
    return(
            <form onSubmit={rename}>
                
                <input type="text" name="RenameTask" />
                <button type="sumbit">Save</button>

            </form>
    )
}

export default RenameModal