import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const FirstPane = ({ children, className, ...props }: Props) => {
  return (
    <div className={`${styles['first-pane']} ${className}`} {...props}>
      {children}
    </div>
  )
}
