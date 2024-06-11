import { IconButton } from '@/IconButton/IconButton'
import styles from './styles.module.scss'

type Props = {
  searchedValue: string
  isViewOpen: boolean
  handleBackClick: () => void
  handleMenuClick: () => void
}
export const LeadingIcon = ({
  searchedValue,
  isViewOpen,
  handleBackClick,
  handleMenuClick
}: Props) => {
  return (
    <>
      <IconButton
        className={`${styles['leading-icon']} ${
          !isViewOpen && searchedValue === ''
            ? styles['display-magnifying-glass']
            : ''
        }`}
        icon="MagnifyingGlass"
        variant="standard"
        type="button"
        noRipple
      />
      <IconButton
        className={`${styles['leading-icon']} ${
          isViewOpen || searchedValue !== '' ? styles['display-arrow-left'] : ''
        }`}
        icon="ArrowLeft"
        variant="standard"
        type="button"
        noRipple
        onClick={handleBackClick}
      />
      <IconButton
        className={`${styles['leading-icon']} ${
          !isViewOpen && searchedValue === '' ? styles['display-bar3'] : ''
        }`}
        icon="Bars3"
        variant="standard"
        type="button"
        noRipple
        onClick={handleMenuClick}
      />
    </>
  )
}
