import { createContext, useContext } from 'react'

export const TasksContext = createContext(null)

export const useTasksContext = () => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasksContext must be used in a TasksContext Provider')
  }

  return context
}
