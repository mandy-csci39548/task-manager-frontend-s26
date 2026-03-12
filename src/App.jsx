import { Route, Routes } from 'react-router-dom'
import { HomePage, TasksDetailPage, TasksPage } from './pages'

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='tasks'>
        <Route index element={<TasksPage />} />
        <Route path=':id' element={<TasksDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
