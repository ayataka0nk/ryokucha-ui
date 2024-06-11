import { ComponentProps } from 'react'
import styles from './styles.module.scss'

export type Props = ComponentProps<'div'>
export const NavigationRailActionArea = ({
  className,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={`${styles['navigation-rail-action-area']} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
