import { useEffect, useReducer } from 'react'
import { TaskForm, TaskList, TasksContext, tasksReducer } from '../components'
import axios from 'axios'

const TasksPage = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

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

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await axios.get(
          'https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks',
        )

        // setTasks(data) // if not using reducers
        dispatch({
          type: 'set',
          tasks: data,
        })
      } catch {
        // setTasks([])
        dispatch({
          type: 'set',
          tasks: [],
        })
      }
    }

    getTasks()
  }, [])

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

export default TasksPage
