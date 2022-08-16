import React from "react"
import { TodoProvider } from "../../context/TodoContext"
import AddTodo from "./components/AddTodo"
import ViewTodos from "./components/ViewTodos"

const Todos: React.FC = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <ViewTodos />
    </TodoProvider>
  )
}

export default Todos
