const addtodoActType = "todo/add"

const todoAddAction={
    type:addtodoActType
}

export const AddAction=(text)=>{
    return {
        ...todoAddAction,
        payload:text
    }
}

