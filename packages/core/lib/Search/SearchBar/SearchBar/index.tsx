import { Layer } from '@/types'
import { forwardRef } from 'react'
import styles from './styles.module.scss'
import { LeadingIcon } from '../LeadingIcon'
import { TrailingIcon } from '../TrailingIcon'

type Props = React.ComponentPropsWithoutRef<'input'> & {
  searchedValue: string
  isViewOpen: boolean
  layer: Layer
  handleBackClick: () => void
  handleMenuClick: () => void
  handleClearClick: () => void
}

export const SearchBar = forwardRef<HTMLInputElement, Props>(
  (
    {
      searchedValue,
      isViewOpen,
      layer,
      handleBackClick,
      handleMenuClick,
      handleClearClick,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={`${styles['search-bar']} ${
          isViewOpen ? styles['view-open'] : ''
        } ${className}`}
      >
        <input
          ref={ref}
          type="text"
          className={`${styles['input']} ${styles[layer]}`}
          placeholder={props.placeholder || ''}
          {...props}
        />
        <LeadingIcon
          searchedValue={searchedValue}
          isViewOpen={isViewOpen}
          handleBackClick={handleBackClick}
          handleMenuClick={handleMenuClick}
        />
        <TrailingIcon
          className={styles['trailing-x-mark']}
          isViewOpen={isViewOpen}
          handleClearClick={handleClearClick}
        />
      </div>
    )
  }
)
