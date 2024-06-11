import {
  NavigationActionType,
  NavigationItemType,
  NavigationProps
} from '../types'
import { useNavigationContext } from '../NavigationContext'

import { FAB } from '@/Button'

import {
  NavigationRailActionArea,
  NavigationRailContainer,
  NavigationRailHeader,
  NavigationRailItem,
  NavigationRailItems,
  NavigationRailMenuIcon
} from '@/Navigation/NavigationRail'

export const NavigationRailTemplate = ({
  action,
  items,
  layer = 'surface-container',
  ActionLinkComponent,
  NavigationLinkComponent
}: NavigationProps & {
  ActionLinkComponent: (props: NavigationActionType) => JSX.Element
  NavigationLinkComponent: (props: NavigationItemType) => JSX.Element
}) => {
  const { setIsDrawerModalOpen } = useNavigationContext()
  const handleMenuIconClick = () => {
    setIsDrawerModalOpen(true)
  }
  return (
    <NavigationRailContainer layer={layer}>
      <NavigationRailHeader>
        <NavigationRailMenuIcon onClick={handleMenuIconClick} />
      </NavigationRailHeader>

      {action && (
        <NavigationRailActionArea>
          {action.href && (
            // <FAB
            //   color="secondary"
            //   icon={action.icon}
            //   component={Link}
            //   to={action.href}
            // />
            <ActionLinkComponent {...action} />
          )}
          {action.onClick && (
            <FAB
              color="secondary"
              icon={action.icon}
              onClick={action.onClick}
              type="button"
            />
          )}
        </NavigationRailActionArea>
      )}
      <NavigationRailItems>
        {items.map((item, index) => {
          if (item.href) {
            return <NavigationLinkComponent key={index} {...item} />
          } else if (item.onClick) {
            return (
              <NavigationRailItem
                key={index}
                icon={item.icon}
                labelText={item.labelText}
                onClick={item.onClick}
                active={item.active}
                component="button"
                type="button"
              />
            )
          } else if (item.externalHref) {
            return (
              <NavigationRailItem
                key={index}
                icon={item.icon}
                labelText={item.labelText}
                href={item.externalHref}
                active={item.active}
                component="a"
              />
            )
          } else {
            return <></>
          }
        })}
      </NavigationRailItems>
    </NavigationRailContainer>
  )
}
