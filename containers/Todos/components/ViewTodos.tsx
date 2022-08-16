import React from "react"
import { useTodo } from "../../../context/TodoContext"

const ViewTodos: React.FC = () => {
  const { state } = useTodo()
  console.log("state", state)
  return <div>myTodos</div>
}

export default ViewTodos
