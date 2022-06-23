const intialState={
    todo:[]
}
export const addReducer=(state=intialState,action)=>{
    if (action.type=="todo/add"){
        return {
            ...state,
            todo:[...state.todo,action.payload]
        }
    }
    return state
}