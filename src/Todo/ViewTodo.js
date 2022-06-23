import { useEffect } from "react";
import { store } from "../store/store";

const ViewTodo = ({todo}) => {

    console.log("state",store.getState())
    const state = store.subscribe(()=>console.log(store.getState()))
    return ( <div>
        {
            todo.length>=1 && todo.map((text)=>
                <div>
                    {text}
                </div>
            )
        }
    </div> );
}
 
export default ViewTodo;