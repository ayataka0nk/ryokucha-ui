import React from 'react'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}
export const SinglePaneLayout = ({ children }: Props) => {
  return <div className={styles['single-pane']}>{children}</div>
}
