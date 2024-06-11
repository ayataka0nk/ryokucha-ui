import { FAB } from '@/Button'

import { NavigationActionType } from '../types'
import styles from './styles.module.scss'

export const FABNavigationTemplate = ({
  action,
  className,
  ActionLinkComponent
}: {
  action: NavigationActionType
  className?: string
  ActionLinkComponent: (props: NavigationActionType) => JSX.Element
}) => {
  if (typeof action === 'undefined') {
    return <></>
  }

  return (
    <div className={`${styles['fab-navigation']} ${className}`}>
      {action.href && (
        // <FAB
        //   size="large"
        //   color="primary"
        //   icon="Pencil"
        //   to={action.href}
        //   floating
        //   component={Link}
        // />
        <ActionLinkComponent {...action} />
      )}
      {action.onClick && (
        <FAB
          size="large"
          color="primary"
          icon={action.icon}
          floating
          type="button"
          onClick={action.onClick}
        />
      )}
    </div>
  )
}
