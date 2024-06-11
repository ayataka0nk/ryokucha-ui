import { NavigationDrawerItem } from '@/Navigation/NavigationDrawer'
import { NavigationDrawerModalTemplate } from '@/Navigation/NavigationDrawerModalTemplate'
import { NavigationItemType, NavigationProps } from '@/Navigation/types'
import { Link } from 'react-router-dom'

const NavigationLinkComponent = (props: NavigationItemType) => {
  return (
    <NavigationDrawerItem
      icon={props.icon}
      labelText={props.labelText}
      to={props.href || ''}
      component={Link}
      active={props.active}
    />
  )
}
export const NavigationDrawerModal = (props: NavigationProps) => {
  return (
    <NavigationDrawerModalTemplate
      {...props}
      NavigationLinkComponent={NavigationLinkComponent}
    />
  )
}
