import { Field, Input } from '@chakra-ui/react'
import { useState } from 'react'

const TaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(description)
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field.Root>
        <Field.Label>New Task</Field.Label>
        <Input
          name='description'
          placeholder='Enter task description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Field.Root>
    </form>
  )
}

export default TaskForm
