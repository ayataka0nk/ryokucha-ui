import { NavigationRailHeader } from '@/Navigation/NavigationRail/NavigationRailHeader'
import { NavigationProps } from '../types'
import { NavigationRailMenuIcon } from '@/Navigation/NavigationRail/NavigationRailMenuIcon'
import { useNavigationContext } from '../NavigationContext'
import { NavigationRailActionArea } from '@/Navigation/NavigationRail/NavigationRailActionArea'
import { FAB } from '@/Button'
import { Link } from 'react-router-dom'
import { NavigationRailItems } from '@/Navigation/NavigationRail/NavigationRailItems'
import { NavigationRailItem } from '@/Navigation/NavigationRail/NavigationRailItem'
import { NavigationRailContainer } from '@/Navigation/NavigationRail/NavigationRailContainer'
import { Layer } from '@/types'

export const NavigationRail = ({
  action,
  items,
  layer = 'surface-container'
}: NavigationProps & {
  layer?: Layer
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
              component={Link}
              to={action.href}
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
                to={item.href}
                component={Link}
                active={item.active}
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
