import './App.module.scss'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ButtonPage } from './pages/ButtonPage'
import '../lib/reset.css'
import '../lib/theme.css'
import '../lib/global.css'
import { AppBarPage } from './pages/AppBarPage'
import { CardPage } from './pages/CardPage'
import { DatePickerPage } from './pages/DatePickerPage'
import { TextFieldPage } from './pages/TextFieldPage'
import { DialogPage } from './pages/DialogPage'
import { TimePickerPage } from './pages/TimePickerPage'
import { SearchPage } from './pages/SearchPage'
import { NavigationContextProvider } from '@/Navigation'
import './index.css'
import { DoublePanePage } from './pages/DoublePanePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      children: [
        { path: '/', element: <div>Home</div> },
        { path: '/appbar', element: <AppBarPage /> },
        { path: '/button', element: <ButtonPage /> },
        { path: '/card', element: <CardPage /> },
        { path: '/datepicker', element: <DatePickerPage /> },
        { path: '/dialog', element: <DialogPage /> },
        { path: '/search', element: <SearchPage /> },
        { path: '/textfield', element: <TextFieldPage /> },
        { path: '/timepicker', element: <TimePickerPage /> },
        { path: '/doublepane', element: <DoublePanePage /> }
      ]
    }
  ])
  return (
    <NavigationContextProvider linkPropName="to" LinkComponent={Link}>
      <RouterProvider router={router} />
    </NavigationContextProvider>
  )
}

export default App
