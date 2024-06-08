import { Icon, IconType } from '@/Icon'
import { ButtonColor } from '../types'
import styles from './styles.module.scss'

type OwnProps<E extends React.ElementType> = {
  color?: ButtonColor
  icon?: IconType
  component?: E
  floating?: boolean
}

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<React.ComponentProps<E>, keyof OwnProps<E>>

export const ExtendedFAB = <E extends React.ElementType = 'button'>({
  className,
  children,
  color = 'primary',
  icon,
  component,
  floating,
  ...props
}: Props<E>) => {
  const Component = component || 'button'
  //   const style = getStyle({ color, icon, floating })
  return (
    <Component
      {...props}
      className={`${className} ${styles['button']} ${
        styles['button-' + color]
      } ${typeof icon !== 'undefined' ? styles['with-icon'] : ''} ${
        floating ? styles['floating'] : ''
      }`}
    >
      {icon && (
        <Icon type={icon} variant="outline" className={styles['icon']} />
      )}
      <span>{children}</span>
    </Component>
  )
}
