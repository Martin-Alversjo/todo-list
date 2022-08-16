import React from "react"

type TodoProps = {
  description: string
  completed: boolean
}

const Todo = ({ description, completed }: TodoProps) => {
  return <div>{description}</div>
}

export default Todo
