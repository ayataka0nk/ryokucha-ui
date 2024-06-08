import './App.module.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { ButtonPage } from './pages/ButtonPage'
import '../lib/reset.css'
import '../lib/theme.css'
import '../lib/global.css'
import { AppBarPage } from './pages/AppBarPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { path: '/', element: <div>Home</div> },
        { path: '/appbar', element: <AppBarPage /> },
        { path: '/button', element: <ButtonPage /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
