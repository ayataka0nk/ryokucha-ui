import React from 'react'
import styles from './styles.module.scss'

type Props = {
  title: string
  children: React.ReactNode
}
export const ViewBox = ({ title, children }: Props) => {
  return (
    <section className={styles['view-box']}>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  )
}
