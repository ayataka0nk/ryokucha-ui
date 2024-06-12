import React from 'react'
import styles from './styles.module.scss'
import { Card } from '@/Card'

type Props = {
  title: string
  children: React.ReactNode
}
export const ViewBox = ({ title, children }: Props) => {
  return (
    <Card layer="surface" className={styles['view-box']}>
      <h1 className={styles['header']}>{title}</h1>
      <div>{children}</div>
    </Card>
  )
}
