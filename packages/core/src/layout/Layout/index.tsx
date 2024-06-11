import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { UserNavigations } from '../UserNavigation'

export const Layout = () => {
  return (
    <div className={`${styles['root']} light`}>
      <UserNavigations pageKey="AppBar" />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  )
}
