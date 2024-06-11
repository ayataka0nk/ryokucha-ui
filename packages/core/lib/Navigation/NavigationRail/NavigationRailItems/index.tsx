import { ComponentProps } from 'react'
import styles from './styles.module.scss'

type Props = ComponentProps<'div'>

export const NavigationRailItems = ({
  className,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={`${styles['navigation-rail-items']} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
