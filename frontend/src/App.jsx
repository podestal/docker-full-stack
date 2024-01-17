import { useEffect, useState } from "react"
import axios from "axios"
import { useQuery, useMutation } from "@tanstack/react-query"

const App = () => { 

  const [title, setTitle] = useState()

  const {mutate} = useMutation({
    mutationFn: (todos) => {
      return axios.post('http://127.0.0.1:8000/api/todos/', todos )
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
  })

  const { data: todos, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => {
      return axios.get('http://127.0.0.1:8000/api/todos/')
      .then(res => res)
      .catch(err => console.log(err))
    }
  })

  const handleSubmit = e => {
    e.preventDefault()
    mutate({ title })
  }

  if (isLoading) return <p>Loading ...</p>

  if (isError) return <p>{error.message}</p>

  return (
    <div>
      <h1>Todo App</h1>
      {todos.data.map(todo => <p key={todo.id}>{todo.title}</p>)}
      {console.log(todos.data)}
      <form>
        <input 
          type="text" 
          placeholder="New Todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
