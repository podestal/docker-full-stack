import { useEffect, useState } from "react"
import axios from "axios"


const App = () => { 

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todos/')
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Todo App</h1>
      {todos && todos.map(todo => <p key={todo.id}>{todo.title}</p>)}
    </>
  )
}

export default App
