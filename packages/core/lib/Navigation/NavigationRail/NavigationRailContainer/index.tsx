import { Layer } from '@/types'
import { ComponentProps } from 'react'
import styles from './styles.module.scss'

type Props = ComponentProps<'nav'> & {
  layer: Layer
}

export const NavigationRailContainer = ({
  className,
  children,
  layer,
  ...props
}: Props) => {
  return (
    <nav
      className={`${styles['navigation-rail-container']} ${styles[layer]} ${className}`}
      {...props}
    >
      {children}
    </nav>
  )
}
