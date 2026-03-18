import { useState } from 'react'
import EditDescription from './EditDescription'
import { useTasksContext } from './context'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react'

const Task = ({ description, completed, id, index }) => {
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const { deleteTask, updateDescription, updateCompleted } = useTasksContext()

  const onEdit = (index, description) => {
    updateDescription(index, description)
    // add additional functionality
    setEditing(false)
  }

  return (
    <Flex gap={2} align='center' my={2}>
      <Checkbox.Root
        id={`task-checkbox-${index}`}
        checked={completed}
        onChange={(e) => updateCompleted(index, e.target.checked)}
        size='xs'
        colorPalette='purple'
      >
        <Checkbox.HiddenInput /> <Checkbox.Control />
      </Checkbox.Root>
      {editing ? (
        <EditDescription
          index={index}
          description={description}
          onEdit={onEdit}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <Text
          style={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {description}
        </Text>
      )}
      <Spacer />
      <ButtonGroup colorPalette='purple' variant='surface' size='xs' attached>
        {!completed && <Button onClick={() => setEditing(true)}>Edit</Button>}
        <Button
          onClick={() => {
            deleteTask(index)
            setEditing(false)
          }}
        >
          Delete
        </Button>

        <Button onClick={() => navigate(`/tasks/${id}`)}>View</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default Task
