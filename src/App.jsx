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

  const addTask = (description) => {
    // Create a new task object
    const newTask = {
      id: tasks.length + 1,
      description,
      completed: false,
    }

    // Update the state (tasks) to include this new task object
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateCompleted={updateCompleted}
      />
    </div>
  )
}

export default App
