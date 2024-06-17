import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const SecondPane = ({ children, className, ...props }: Props) => {
  return (
    <div className={`${styles['second-pane']} ${className}`} {...props}>
      {children}
    </div>
  )
}
