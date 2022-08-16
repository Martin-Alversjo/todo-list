import React from "react"
import { useTodo, TODO_ACTION } from "../../../context/TodoContext"

const AddTodo: React.FC = () => {
  const { state, dispatch } = useTodo()

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      description: { value: string }
    }
    const todoDescription = target.description.value
    let todoCompleted = false

    const checkbox = document.getElementById(
      "completed"
    ) as HTMLInputElement | null

    if (checkbox != null) {
      if (checkbox.checked) {
        todoCompleted = true
      }
    }

    try {
      dispatch({
        type: TODO_ACTION.ADD,
        payload: {
          id: state.todos.length + 1,
          description: todoDescription,
          completed: todoCompleted,
        },
      })
    } catch (error) {
      throw new Error(`Could not add new todo due to: ${error}`)
    }
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
