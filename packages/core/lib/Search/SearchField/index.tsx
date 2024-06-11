import React from 'react'
import { Layer } from '@/types'
import styles from './styles.module.scss'
import { SearchView } from '../SearchView'
import { SearchBar } from '../SearchBar'

type Props = {
  searchedValue: string
  isViewOpen: boolean
  layer: Layer
  onBackClick: () => void
  onMenuClick: () => void
  onClearClick: () => void
} & React.ComponentPropsWithRef<'input'>

export const SearchField = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      searchedValue,
      isViewOpen,
      layer = 'surface-container-highest',
      onBackClick,
      onMenuClick,
      onClearClick,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${styles['search-field']} ${className}`}>
        <div className={styles['search-field-container']}>
          <SearchBar
            ref={ref}
            searchedValue={searchedValue}
            isViewOpen={isViewOpen}
            layer={layer}
            handleBackClick={onBackClick}
            handleMenuClick={onMenuClick}
            handleClearClick={onClearClick}
            {...props}
          />
          <SearchView isViewOpen={isViewOpen} layer={layer}>
            {children}
          </SearchView>
        </div>
      </div>
    )
  }
)
