import { useState } from "react";
import AddTodo from "./Todo/Addtodo";
import ViewTodo from "./Todo/ViewTodo";
const App = () => {
    const [addTodo,setAddDodo] = useState([])

  return (
    <div>
      <AddTodo addTodo={addTodo} setAddDodo={setAddDodo} />
      <ViewTodo todo={addTodo}/>
    </div>
  );
};

export default App;
