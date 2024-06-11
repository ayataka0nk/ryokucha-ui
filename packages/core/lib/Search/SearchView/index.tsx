import { Layer } from '@/types'
import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  isViewOpen: boolean
  layer: Layer
}

export const SearchView = ({
  isViewOpen,
  layer,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={`${styles['search-view']} ${styles[layer]} ${
        isViewOpen ? '' : styles['close']
      } ${className} `}
      {...props}
    />
  )
}
