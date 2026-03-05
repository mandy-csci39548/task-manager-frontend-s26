import Task from './Task'

const TaskList = ({ tasks = [] }) => {
  if (!tasks.length) {
    return <p>No tasks to display!</p>
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} index={index} {...task} />
      ))}

      {tasks.length > 0 && <p>There are {tasks.length} tasks.</p>}
    </div>
  )
}

export default TaskList
