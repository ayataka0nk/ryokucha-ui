import { ElementType, memo } from 'react'
import { PolymorphicComponentProps } from '@/types'
import { Icon, IconType } from '@/Icon'
import styles from './styles.module.scss'

type OwnProps = {
  icon?: IconType
  labelText: string
  active?: boolean
}

const NavigationDrawerItemComponent = <E extends ElementType = 'div'>({
  component,
  icon,
  labelText,
  active = false,
  className,
  ...props
}: PolymorphicComponentProps<E, OwnProps>) => {
  const Component = component || 'div'

  return (
    <Component
      className={`${className} ${styles['nav-item']} ${
        active ? styles['active'] : ''
      }`}
      {...props}
    >
      {icon && (
        <Icon variant="outline" type={icon} className={styles['icon']} />
      )}
      <p>{labelText}</p>
    </Component>
  )
}

export const NavigationDrawerItem = memo(
  NavigationDrawerItemComponent
) as typeof NavigationDrawerItemComponent
