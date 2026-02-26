import { useState } from 'react'

const TaskForm = () => {
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task:
        <input
          name='description'
          placeholder='Enter task description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
    </form>
  )
}

export default TaskForm
