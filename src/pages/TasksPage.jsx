import { useEffect, useReducer } from 'react'
import { TaskForm, TaskList, TasksContext, tasksReducer } from '../components'
import axios from 'axios'
import { Flex } from '@chakra-ui/react'

const TasksPage = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  const deleteTask = async (index) => {
    const task = tasks[index]
    await axios.delete(`http://localhost:8000/tasks/${task.id}`)

    dispatch({
      type: 'set',
      tasks: tasks.filter((t) => t.id !== task.id),
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

  const updateDescription = async (index, description) => {
    const task = tasks[index]

    const { data } = await axios.put(`http://localhost:8000/tasks/${task.id}`, {
      ...task,
      description,
    })

    dispatch({
      type: 'set',
      tasks: tasks.map((t) => (t.id === task.id ? data : t)),
    })
  }

  const addTask = async (description) => {
    const { data } = await axios.post(`http://localhost:8000/tasks`, {
      description,
      completed: false,
    })

    dispatch({
      type: 'set',
      tasks: [...tasks, data],
    })
  }

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/tasks')

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
      <Flex direction='column' gap={2}>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} />
      </Flex>
    </TasksContext>
  )
}

export default TasksPage
