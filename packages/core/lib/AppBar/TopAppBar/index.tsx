import { IconType } from '@/Icon'
import { IconButton } from '@/IconButton/IconButton'
import { ComponentProps, memo } from 'react'
import styles from './styles.module.scss'
import { Layer } from '@/types'

type Props = ComponentProps<'header'> & {
  onLeadingIconClick?: () => void
  leadingIcon: IconType
  logo: React.ReactNode
  layer?: Layer
}

const TopAppBarComponent = ({
  className,
  leadingIcon,
  onLeadingIconClick,
  logo,
  layer = 'surface-container',
  ...props
}: Props) => {
  return (
    <header
      className={`${styles['top-app-bar']} ${styles[layer]} ${className}`}
      {...props}
    >
      <IconButton icon={leadingIcon} onClick={onLeadingIconClick} />
      {logo}
    </header>
  )
}
export const TopAppBar = memo(TopAppBarComponent) as typeof TopAppBarComponent
