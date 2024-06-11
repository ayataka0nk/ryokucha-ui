import { Link } from 'react-router-dom'

import { NavigationRailItem } from '@/Navigation/NavigationRail'
import {
  NavigationActionType,
  NavigationItemType,
  NavigationProps
} from '@/Navigation/types'
import { NavigationRailTemplate } from '@/Navigation/NavigationRailTemplate'
import { FAB } from '@/Button'
const NavigationRailLinkItem = (props: NavigationItemType) => {
  return (
    <NavigationRailItem
      icon={props.icon}
      labelText={props.labelText}
      to={props.href || ''}
      component={Link}
      active={props.active}
    />
  )
}
const LinkActionItem = (props: NavigationActionType) => {
  return (
    <FAB
      color="secondary"
      icon={props.icon}
      component={Link}
      to={props.href || ''}
    />
  )
}
export const NavigationRail = ({ ...props }: NavigationProps) => {
  return (
    <NavigationRailTemplate
      {...props}
      NavigationLinkComponent={NavigationRailLinkItem}
      ActionLinkComponent={LinkActionItem}
    />
  )
}
