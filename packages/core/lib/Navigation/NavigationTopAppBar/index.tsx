import { TopAppBar } from '@/AppBar'
import { useNavigationContext } from '../NavigationContext'
import styles from './styles.module.scss'

type Props = {
  logo: React.ReactNode
  className?: string
}

export const NavigationTopAppBar = ({ className, logo }: Props) => {
  const { setIsDrawerModalOpen } = useNavigationContext()
  const handleLeadingIconClick = () => {
    setIsDrawerModalOpen(true)
  }
  return (
    <TopAppBar
      className={`${styles['navigation-top-app-bar']} ${className}`}
      logo={logo}
      leadingIcon="Bars3"
      onLeadingIconClick={handleLeadingIconClick}
    />
  )
}
