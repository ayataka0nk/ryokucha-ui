import { FAB } from '@/Button'

import { NavigationActionType } from '../types'
import styles from './styles.module.scss'
import { useNavigationContext } from '../NavigationContext'

export const FABNavigationTemplate = ({
  className,

  ...props
}: NavigationActionType & {
  className?: string
}) => {
  const { linkPropName, LinkComponent } = useNavigationContext()
  return (
    <div className={`${styles['fab-navigation']} ${className}`}>
      {props.href && (
        <FAB
          size="large"
          color="primary"
          icon={props.icon}
          floating
          component={LinkComponent}
          {...{
            [linkPropName]: props.href
          }}
        />
      )}
      {props.onClick && (
        <FAB
          size="large"
          color="primary"
          icon={props.icon}
          floating
          type="button"
          onClick={props.onClick}
        />
      )}
    </div>
  )
}
