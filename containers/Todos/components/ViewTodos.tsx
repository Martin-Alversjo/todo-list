import React from "react"
import { useTodo } from "../../../context/TodoContext"
import Todo from "./Todo"

const ViewTodos: React.FC = () => {
  const { state } = useTodo()
  console.log("state", state)
  return (
    <div>
      {state.todos.map((t) => (
        <Todo description={t.description} completed={t.completed} />
      ))}
    </div>
  )
}

export default ViewTodos
