import React from 'react'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}
export const ViewBlock = ({ children }: Props) => {
  return <div className={styles['view-block']}>{children}</div>
}
