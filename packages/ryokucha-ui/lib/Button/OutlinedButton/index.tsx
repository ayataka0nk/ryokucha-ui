import { Icon } from '@/Icon'
import { ButtonProps } from '../types'
import styles from './styles.module.scss'

export const OutlinedButton = <E extends React.ElementType>({
  className,
  children,
  color = 'primary',
  icon,
  component,
  ...props
}: ButtonProps<E>) => {
  const Component = component || 'button'
  return (
    <Component
      {...props}
      className={`${styles['button']} ${styles['button-' + color]} ${
        typeof icon !== 'undefined' ? styles['with-icon'] : ''
      } ${className}`}
    >
      {icon && (
        <Icon type={icon} variant="outline" className={styles['icon']} />
      )}
      <p>{children}</p>
    </Component>
  )
}
