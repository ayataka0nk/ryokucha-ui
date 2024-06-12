import { Outlet, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'
import { UserNavigations } from '../UserNavigation'
import { NavigationActionType, NavigationTopAppBar } from '@/Navigation'
import { Logo } from '../UserNavigation/Logo'
import { getPageKeyFromPath } from '../UserNavigation/getNavigationItems'
import { SinglePaneLayout } from '@/Layout/SinglePaneLayout'

export const Layout = () => {
  const navigationAction: NavigationActionType = {
    icon: 'Pencil',
    labelText: 'Dummy Action',
    href: '/button'
  }
  const location = useLocation()
  const pageKey = getPageKeyFromPath(location.pathname)

  return (
    <div className={`${styles['root']}`}>
      <UserNavigations pageKey={pageKey} navigationAction={navigationAction} />
      <div className={styles['content']}>
        <NavigationTopAppBar logo={<Logo />} />
        <SinglePaneLayout>
          <Outlet />
        </SinglePaneLayout>
      </div>
    </div>
  )
}
