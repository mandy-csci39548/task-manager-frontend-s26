import { useState } from 'react'
import styles from './Task.module.css'
import EditDescription from './EditDescription'
import { useTasksContext } from './context'
import { useNavigate } from 'react-router-dom'

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
    <div
      className={styles['task-container']}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px',
        gap: '10px',
      }}
    >
      <input
        type='checkbox'
        id='task-checkbox'
        checked={completed}
        onChange={(e) => updateCompleted(index, e.target.checked)}
      />
      {editing ? (
        <EditDescription
          index={index}
          description={description}
          onEdit={onEdit}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <span
          style={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {description}
        </span>
      )}
      {!completed && <button onClick={() => setEditing(true)}>Edit</button>}
      <button
        onClick={() => {
          deleteTask(index)
          setEditing(false)
        }}
      >
        Delete
      </button>

      <button onClick={() => navigate(`/tasks/${id}`)}>View</button>
    </div>
  )
}

export default Task
