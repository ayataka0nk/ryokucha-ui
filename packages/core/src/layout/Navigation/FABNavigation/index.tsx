import { FAB } from '@/Button'
import { Link } from 'react-router-dom'
import { NavigationActionType } from '../types'
import styles from './styles.module.scss'

export const FABNavigation = ({
  action,
  className
}: {
  action: NavigationActionType
  className?: string
}) => {
  if (typeof action === 'undefined') {
    return <></>
  } else if (action.href) {
    return (
      <FAB
        className={`${styles['fab-navigation']} ${className}`}
        size="large"
        color="primary"
        icon="Pencil"
        to={action.href}
        floating
        component={Link}
      />
    )
  } else if (action.onClick) {
    return (
      <FAB
        className={`${styles['fav-navigation']} ${className}`}
        size="large"
        color="primary"
        icon="Pencil"
        floating
        type="button"
        onClick={action.onClick}
      />
    )
  } else {
    return <></>
  }
}
