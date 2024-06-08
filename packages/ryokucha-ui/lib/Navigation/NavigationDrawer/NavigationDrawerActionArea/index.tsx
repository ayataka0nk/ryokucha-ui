import { ComponentProps } from 'react'
import styles from './styles.module.scss'

type Props = ComponentProps<'div'>

export const NavigationDrawerActionArea = ({
  className,
  children,
  ...props
}: Props) => {
  return (
    <div className={`${className} ${styles['nav-action-area']}`} {...props}>
      {children}
    </div>
  )
}
