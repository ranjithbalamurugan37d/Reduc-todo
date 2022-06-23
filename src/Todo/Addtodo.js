import { useEffect, useState } from "react";
import { store } from "../store/store";
import {AddAction} from "../Action/addtodo"
const AddTodo = ({addTodo,setAddDodo}) => {
    const [text,setText] = useState()
    const onHandleClick=()=>{
        store.dispatch(AddAction(text))
    }
    store.subscribe(()=>console.log("from the addtodo",store.getState()))
    useEffect(()=>{
        console.log(addTodo)
    },[addTodo])
    return (
        <div>
            <input type={"text"} onChange={e=>setText(e.target.value)}/>
            <button onClick={onHandleClick}>
                Add Todo
            </button>
            
        </div>
      );
}
 
export default AddTodo;