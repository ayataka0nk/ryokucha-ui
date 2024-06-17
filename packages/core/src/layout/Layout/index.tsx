import { Outlet, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'
import { UserNavigations } from '../UserNavigation'
import { NavigationActionType } from '@/Navigation'

import { getPageKeyFromPath } from '../UserNavigation/getNavigationItems'
import React from 'react'

type Props = {
  navigationAction?: NavigationActionType
  children: React.ReactNode
}
export const Layout = ({ navigationAction, children }: Props) => {
  // const navigationAction: NavigationActionType = {
  //   icon: 'Pencil',
  //   labelText: 'Dummy Action',
  //   href: '/button'
  // }
  const location = useLocation()
  const pageKey = getPageKeyFromPath(location.pathname)

  return (
    <div className={`${styles['root']}`}>
      <UserNavigations pageKey={pageKey} navigationAction={navigationAction} />
      {children}
      <Outlet />
    </div>
  )
}
