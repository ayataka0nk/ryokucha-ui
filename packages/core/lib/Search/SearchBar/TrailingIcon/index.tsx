import { IconButton } from '@/IconButton/IconButton'
import styles from './styles.module.scss'

type Props = {
  className?: string
  isViewOpen: boolean
  handleClearClick: () => void
}

export const TrailingIcon = ({
  className,
  // isViewOpen,
  handleClearClick
}: Props) => {
  // const style = getTrailingIconStyle()
  // const xMarkIconStyle = getXMarkIconStyle({ isViewOpen, docked })
  return (
    <IconButton
      className={`${styles['trailing-icon']} ${className}`}
      icon="XMark"
      variant="standard"
      type="button"
      noRipple
      onClick={handleClearClick}
    />
  )
}
