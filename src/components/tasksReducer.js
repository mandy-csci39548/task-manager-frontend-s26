export const tasksReducer = (tasks, action) => {
  if (action.type === 'added') {
    const newTask = {
      id: tasks.length + 1,
      description: action.description,
      completed: false,
    }

    return [...tasks, newTask]
  } else if (action.type === 'deleted') {
    return tasks.filter((task, index) => index !== action.index)
  } else if (action.type === 'updated') {
    // action: { type, index, field, value }
    const { index, field, value } = action
    return tasks.map((task, idx) =>
      idx === index ? { ...task, [field]: value } : task,
    )
  }
}
