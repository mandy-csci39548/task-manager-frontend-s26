import { useState } from 'react'
import { TaskForm, TaskList } from './components'

const App = () => {
  const [tasks, setTasks] = useState([
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
  ])

  const deleteTask = (index) => {
    setTasks((t) => t.filter((task, idx) => idx !== index))
  }

  const updateCompleted = (index, completed) => {
    setTasks(
      tasks.map((task, idx) => (idx === index ? { ...task, completed } : task)),
    )
  }

  return (
    <div>
      <TaskForm />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateCompleted={updateCompleted}
      />
    </div>
  )
}

export default App
