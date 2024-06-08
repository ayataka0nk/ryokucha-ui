import { Icon, IconType } from '@/Icon'
import { ButtonColor } from '../types'
import styles from './styles.module.scss'

type FABSize = 'small' | 'medium' | 'large'
type OwnProps<E extends React.ElementType> = {
  color?: ButtonColor
  icon: IconType
  component?: E
  floating?: boolean
  size?: FABSize
}

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<React.ComponentProps<E>, keyof OwnProps<E>>

export const FAB = <E extends React.ElementType = 'button'>({
  className,
  color = 'primary',
  icon,
  component,
  floating,
  size = 'medium',
  ...props
}: Props<E>) => {
  const Component = component || 'button'

  return (
    <Component {...props} className={`${className}`}>
      <div
        className={`${styles['button']} ${styles['button-' + color]} ${
          styles['button-' + size]
        } ${floating ? styles['floating'] : ''}`}
      >
        {icon && (
          <Icon
            type={icon}
            variant="outline"
            className={styles['icon-' + size]}
          />
        )}
      </div>
    </Component>
  )
}
