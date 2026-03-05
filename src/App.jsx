import { useReducer } from 'react'
import { TaskForm, TaskList, TasksContext, tasksReducer } from './components'

const App = () => {
  const initialTasks = [
    {
      id: 1,
      description: 'Finish react project',
      completed: false,
    },
    {
      id: 2,
      description: 'Read docs',
      completed: false,
    },
    {
      id: 3,
      description: 'Submit assignment',
      completed: true,
    },
  ]

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  const deleteTask = (index) => {
    dispatch({
      type: 'deleted',
      index,
    })
  }

  const updateCompleted = (index, completed) => {
    dispatch({
      type: 'updated',
      index,
      field: 'completed',
      value: completed,
    })
  }

  const updateDescription = (index, description) => {
    dispatch({
      type: 'updated',
      index,
      field: 'description',
      value: description,
    })
  }

  const addTask = (description) => {
    dispatch({
      type: 'added',
      description,
    })
  }

  return (
    // Provider
    <TasksContext value={{ deleteTask, updateCompleted, updateDescription }}>
      <div>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </TasksContext>
  )
}

export default App
