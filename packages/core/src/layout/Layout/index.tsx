import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { UserNavigations } from '../UserNavigation'
import { NavigationActionType } from '@/Navigation'

export const Layout = () => {
  const navigationAction: NavigationActionType = {
    icon: 'Pencil',
    labelText: 'Dummy Action',
    href: '/button'
  }
  return (
    <div className={`${styles['root']} light`}>
      <UserNavigations pageKey="AppBar" navigationAction={navigationAction} />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  )
}
