import { Icon, IconType } from '@/Icon'
import { PolymorphicComponentProps } from '@/types'
import { ElementType } from 'react'
import styles from './styles.module.scss'

type Props<E extends ElementType> = PolymorphicComponentProps<
  E,
  {
    icon: IconType
    active?: boolean
    labelText?: string
  }
>

export const NavigationRailItem = <E extends ElementType>({
  className,
  icon,
  active,
  labelText,
  component,
  ...props
}: Props<E>) => {
  const Component = component || 'div'
  //   const rootStyle = getRootStyle({ labelText })
  //   const iconWrapperStyle = getIconWrapperStyle({ active, labelText })
  //   const textLabelStyle = getLabelTextStyle({ active })
  return (
    <Component
      className={`${styles['navigation-rail-item']} ${className}`}
      {...props}
    >
      <div
        className={`${styles['icon-wrapper']} ${styles['with-label']} ${
          active ? styles['active'] : ''
        }`}
      >
        <Icon className={styles['icon']} variant="outline" type={icon} />
      </div>
      {labelText && <span className={styles['label']}>{labelText}</span>}
    </Component>
  )
}
