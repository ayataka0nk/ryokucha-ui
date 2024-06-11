import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { NavigationDrawerStandard } from '../Navigation'

export const Layout = () => {
  return (
    <div className={`${styles['root']} light`}>
      <NavigationDrawerStandard />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  )
}
