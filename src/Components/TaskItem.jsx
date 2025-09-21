import { useSelector } from "react-redux"
import styled,{keyframes} from "styled-components"
import { useDispatch } from "react-redux"
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;
const Item=styled.li`
    display: flex;
    column-gap: 10px;
    background: #4f46e5;
  color: white;
  padding: 15px 20px;
  margin: 10px 0;
  border-radius: 12px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease forwards;

  &:hover {
    background: #6366f1;
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;
const DeleteTaskButton = styled.button`
background: #ef4444;
border: none;
color: white;
border-radius: 8px;
padding: 5px 10px;
cursor: pointer;
font-weight: bold;
transition: all 0.2s ease;

&:hover {
  background: #f87171;
}
`;
const TaskItem=()=>{
    const tasks=useSelector(state => state.tasks)
    const dispatch=useDispatch()
    const deleteTask=(e)=>{
        dispatch({
            type:"Delete",
            payload:e.target.id
        })
    }
    return(
        tasks.map(task=>
            <Item key={task.id}>
                {task.task}
                <DeleteTaskButton id={task.id } onClick={deleteTask}>Delete</DeleteTaskButton>
            </Item>
        )

        
    )
}
export default TaskItem