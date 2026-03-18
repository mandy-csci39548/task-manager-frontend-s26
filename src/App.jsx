import { Route, Routes } from 'react-router-dom'
import { HomePage, TasksDetailPage, TasksPage } from './pages'
import { MainLayout } from './layouts'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='tasks'>
          <Route index element={<TasksPage />} />
          <Route path=':id' element={<TasksDetailPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
