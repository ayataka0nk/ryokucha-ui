import { ExtendedFAB } from '@/Button'
import { NavigationDrawerItem } from '@/Navigation/NavigationDrawer'
import { NavigationDrawerTemplate } from '@/Navigation/NavigationDrawerTemplate'
import {
  NavigationActionType,
  NavigationItemType,
  NavigationProps
} from '@/Navigation/types'
import { Link } from 'react-router-dom'

const ActionLinkComponent = (props: NavigationActionType) => {
  return (
    <ExtendedFAB icon={props.icon} onClick={props.onClick} type="button">
      {props.labelText}
    </ExtendedFAB>
  )
}
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

export const NavigationDrawer = (props: NavigationProps) => {
  return (
    <NavigationDrawerTemplate
      {...props}
      ActionLinkComponent={ActionLinkComponent}
      NavigationLinkComponent={NavigationLinkComponent}
    />
  )
}
