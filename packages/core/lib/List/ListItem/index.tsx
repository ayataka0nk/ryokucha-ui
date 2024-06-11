import { Icon, IconType } from '@/Icon'
import { ComponentProps, memo } from 'react'
import styles from './styles.module.scss'

type OwnProps<E extends React.ElementType> = {
  component?: E
  headline?: string
  icon?: IconType
}

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps<E> | 'children'>

const ListItemComponent = <E extends React.ElementType = 'div'>({
  headline,
  icon,
  className,
  component,
  ...props
}: Props<E>) => {
  const Component = component || 'div'
  const hasAction =
    typeof props.onClick !== 'undefined' || typeof props.href !== 'undefined'

  return (
    <Component
      className={`${styles['list-item']} ${
        hasAction ? styles['has-action'] : ''
      } ${className}`}
      {...props}
    >
      {icon && (
        <Icon variant="outline" type={icon} className={styles['icon']} />
      )}
      <p className="text-on-surface">{headline}</p>
    </Component>
  )
}

export const ListItem = memo(ListItemComponent) as typeof ListItemComponent
