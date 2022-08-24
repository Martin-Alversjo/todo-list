import React from "react"

type DeleteProps = {
  onClick: () => void
}

const DeleteTodo = ({ onClick }: DeleteProps) => {
  return <span onClick={onClick}>X</span>
}
