import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'
import { Layer } from '@/types'

type Props = ComponentPropsWithoutRef<'div'> & {
  layer?: Layer
}

export const DoublePaneFrame = ({
  children,
  className,
  layer = 'surface-container',
  ...props
}: Props) => {
  return (
    <div
      className={`${styles['double-pane-frame']} ${styles[layer]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
