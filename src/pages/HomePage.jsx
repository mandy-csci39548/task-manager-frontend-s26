import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to my Task Manager!</h1>
      <Link to='/tasks'>View my tasks</Link>
      <button onClick={() => navigate('/tasks')}>Go to my tasks</button>
    </div>
  )
}

export default HomePage
