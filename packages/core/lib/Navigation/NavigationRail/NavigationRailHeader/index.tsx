import React from 'react'
import styles from './styles.module.scss'

type Props = React.ComponentProps<'div'>
export const NavigationRailHeader = ({
  children,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={`${styles['navigation-rail-header']} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
