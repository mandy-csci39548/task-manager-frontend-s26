import Task from './Task'

const TaskList = ({ tasks = [], deleteTask, updateCompleted }) => {
  if (!tasks.length) {
    return <p>No tasks to display!</p>
  }

  console.log(tasks)
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          {...task}
          deleteTask={deleteTask}
          updateCompleted={updateCompleted}
          // description={task.description}
          // completed={task.completed}
        />
      ))}

      {tasks.length > 0 && <p>There are {tasks.length} tasks.</p>}
    </div>
  )
}

export default TaskList
