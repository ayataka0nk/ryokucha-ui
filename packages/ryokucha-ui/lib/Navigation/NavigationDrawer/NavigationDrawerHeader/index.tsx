import { ComponentProps } from 'react'
import { IconType } from '../../../Icon/types'
import { IconButton } from '../../../IconButton/IconButton'
import styles from './styles.module.scss'

type Props = ComponentProps<'div'> & {
  icon?: IconType
  onIconClick?: () => void
}
export const NavigationDrawerHeader = ({
  className,
  children,
  icon,
  onIconClick,
  ...props
}: Props) => {
  return (
    <div
      className={`${className} ${styles['nav-header']} ${
        typeof icon !== 'undefined'
          ? styles['with-icon']
          : styles['without-icon']
      }`}
      {...props}
    >
      {icon && <IconButton icon={icon} onClick={onIconClick} />}
      <div>{children}</div>
    </div>
  )
}
