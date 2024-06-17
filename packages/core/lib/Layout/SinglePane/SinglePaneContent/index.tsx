import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

type Props = ComponentPropsWithoutRef<'div'>
export const SinglePaneContent = ({ children, className, ...props }: Props) => {
  return (
    <div className={`${styles['single-pane-content']} ${className}`} {...props}>
      {children}
    </div>
  )
}
