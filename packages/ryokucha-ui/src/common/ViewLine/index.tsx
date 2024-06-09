import React from 'react'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}
export const ViewLine = ({ children }: Props) => {
  return <div className={styles['view-line']}>{children}</div>
}
