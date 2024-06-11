import { Layer } from '@/types'
import React from 'react'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
  layer: Layer
}
export const NavigationDrawerContainer = ({ children, layer }: Props) => {
  return (
    <nav className={`${styles[layer]} ${styles['navigation']}`}>{children}</nav>
  )
}
