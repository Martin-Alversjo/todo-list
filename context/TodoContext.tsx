import * as React from "react"

type ITodo = Readonly<{
  id: number
  description: string
  completed: boolean
}>

type notCompletedTodo = ITodo & {
  readonly completed: false
}

type CompletedTodo = ITodo & {
  readonly completed: true
}

enum TODO_ACTION {
  ADD = "add_todo",
  DELETE = "delete_todo",
  TOGGLE_COMPLETED = "toggle_completed",
}

type Action =
  | { type: TODO_ACTION.ADD; payload: ITodo }
  | { type: TODO_ACTION.DELETE; payload: any }
  | { type: TODO_ACTION.TOGGLE_COMPLETED; payload: any }

type Dispatch = (action: Action) => void
type State = { todos: ITodo[] }
type TodoProviderProps = { children: React.ReactNode }

const TodoStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case TODO_ACTION.ADD: {
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            description: action.payload.description,
            completed: action.payload.completed,
          },
        ],
      }
    }
    case TODO_ACTION.DELETE: {
      const newTodos = [...state.todos]
      const todoToRemove = newTodos.indexOf(action.payload.id)
      if (todoToRemove) {
        newTodos.splice(todoToRemove, 1)
      }
      return {
        todos: [...newTodos],
      }
    }
    case TODO_ACTION.TOGGLE_COMPLETED: {
      const todos = [...state.todos]
      const todoIndex = todos.findIndex((t) => t.id === action.payload.id)
      const toggledCompletedTodo = {
        id: action.payload.id,
        description: action.payload.description,
        completed: !todos[todoIndex].completed,
      }
      todos[todoIndex] = toggledCompletedTodo
      return {
        todos: todos,
      }
    }
    default: {
      throw new Error(`Action type does not exist.`)
    }
  }
}

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = React.useReducer(todoReducer, { todos: [] })
  const value = { state, dispatch }
  return (
    <TodoStateContext.Provider value={value}>
      {children}
    </TodoStateContext.Provider>
  )
}

function useTodo() {
  const context = React.useContext(TodoStateContext)
  if (context === undefined) {
    throw new Error(`useTodo has to be within a TodoProvider`)
  }
  return context
}

export { TodoProvider, useTodo, TODO_ACTION }
