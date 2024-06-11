import { ComponentProps } from 'react'
import styles from './styles.module.scss'

type Props = ComponentProps<'div'>

export const NavigationDrawerItems = ({
  className,
  children,
  ...props
}: Props) => {
  return (
    <div className={`${className} ${styles['nav-items']}`} {...props}>
      {children}
    </div>
  )
}
