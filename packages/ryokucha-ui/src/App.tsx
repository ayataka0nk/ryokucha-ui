import './App.module.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { ButtonPage } from './pages/ButtonPage'
import '../lib/reset.css'
import '../lib/theme.css'
import '../lib/global.css'
import { AppBarPage } from './pages/AppBarPage'
import { CardPage } from './pages/CardPage'
import { DatePickerPage } from './pages/DatePickerPage'
import { TextFieldPage } from './pages/TextFieldPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { path: '/', element: <div>Home</div> },
        { path: '/appbar', element: <AppBarPage /> },
        { path: '/button', element: <ButtonPage /> },
        { path: '/card', element: <CardPage /> },
        { path: '/datepicker', element: <DatePickerPage /> },
        { path: 'textfield', element: <TextFieldPage /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
