import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TasksDetailPage = () => {
  const { id } = useParams()
  const [task, setTask] = useState(undefined)

  useEffect(() => {
    const getTaskDetail = async () => {
      const { data } = await axios.get(
        `https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks/${id}`,
      )

      setTask(data)
    }

    getTaskDetail()
  }, [id])

  if (!task) return null

  return (
    <div>
      <h1>{task.description} </h1>
      <h2>
        Completed: {task.completed ? 'Completed!' : 'Not yet completed...'}
      </h2>
      <h3>Created: {new Date(task.createdAt).toLocaleDateString()} </h3>
    </div>
  )
}

export default TasksDetailPage
