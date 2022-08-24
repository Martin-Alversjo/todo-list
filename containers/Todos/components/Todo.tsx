import React from "react"
import { useTodo, TODO_ACTION } from "../../../context/TodoContext"
import Checkbox from "../../../components/Checkbox"

type TodoProps = {
  description: string
  completed: boolean
  id: number
}

const Todo = ({ description, completed, id }: TodoProps) => {
  const { dispatch } = useTodo()

  const handleCompleted = () => {
    dispatch({
      type: TODO_ACTION.TOGGLE_COMPLETED,
      payload: { id, description, completed },
    })
  }

  const handleDelete = () => {
    dispatch({
      type: TODO_ACTION.DELETE,
      payload: { id },
    })
  }

  return (
    <div>
      <Checkbox onChange={() => handleCompleted()} isChecked={completed} />{" "}
      {description}
      <span onClick={() => handleDelete()}>X</span>
    </div>
  )
}

export default Todo
