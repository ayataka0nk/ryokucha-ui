import { NavigationProps } from '../types'
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
  linkPropName,
  LinkComponent
}: NavigationProps & {
  linkPropName: string
  LinkComponent: React.ForwardRefExoticComponent<any>
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
            <FAB
              color="secondary"
              icon={action.icon}
              component={LinkComponent}
              {...{
                [linkPropName]: action.href
              }}
            />
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
            return (
              <NavigationRailItem
                key={index}
                icon={item.icon}
                labelText={item.labelText}
                active={item.active}
                component={LinkComponent}
                {...{
                  [linkPropName]: item.href
                }}
              />
            )
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
