import { NavigationDrawerHeader } from '../NavigationDrawerHeader'
import styles from './styles.module.scss'

type Props = {
  onCloseClick: () => void
  children: React.ReactNode
}
export const NavigationDrawerModalHeader = ({
  onCloseClick,
  children
}: Props) => {
  return (
    <NavigationDrawerHeader
      className={styles['navigation-drawer-modal-header']}
      icon="ChevronDoubleLeft"
      onIconClick={onCloseClick}
    >
      {children}
    </NavigationDrawerHeader>
  )
}
