import React from "react"
import { useTodo, TODO_ACTION } from "../../../context/TodoContext"

const AddTodo: React.FC = () => {
  const { dispatch } = useTodo()

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const checkbox = document.getElementById(
      "completed"
    ) as HTMLInputElement | null
    const target = event.target as typeof event.target & {
      description: { value: string }
    }
    const todoDescription = target.description.value
    let todoCompleted

    if (checkbox != null) {
      todoCompleted = true
    } else {
      todoCompleted = false
    }
    console.log("todoCompleted", todoCompleted)
    try {
      dispatch({
        type: TODO_ACTION.ADD,
        payload: {
          id: 0,
          description: todoDescription,
          completed: todoCompleted,
        },
      })
    } catch (error) {
      throw new Error(`Could not add new todo due to: ${error}`)
    }
    console.log(todoDescription)
  }
  return (
    <div>
      <form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
        <input type="checkbox" name="completed" id="completed" />
        <input type="text" name="description" />
      </form>
    </div>
  )
}

export default AddTodo
