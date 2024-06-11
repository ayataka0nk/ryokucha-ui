import {
  NavigationDrawerActionArea,
  NavigationDrawerHeader,
  NavigationDrawerItem,
  NavigationDrawerItems
} from '@/Navigation/NavigationDrawer'
import {
  NavigationActionType,
  NavigationItemType,
  NavigationProps
} from '../types'
import { ExtendedFAB } from '@/Button'
import { NavigationDrawerContainer } from '@/Navigation/NavigationDrawer/NavigationDrawerContainer'

export const NavigationDrawerTemplate = ({
  logo,
  action,
  items,
  layer = 'surface-container',
  ActionLinkComponent,
  NavigationLinkComponent
}: NavigationProps & {
  ActionLinkComponent: (props: NavigationActionType) => JSX.Element
  NavigationLinkComponent: (props: NavigationItemType) => JSX.Element
}) => {
  return (
    <NavigationDrawerContainer layer={layer}>
      <NavigationDrawerHeader>{logo}</NavigationDrawerHeader>
      {action && (
        <NavigationDrawerActionArea>
          {action.href && <ActionLinkComponent {...action} />}
          {action.onClick && (
            <ExtendedFAB
              icon={action.icon}
              onClick={action.onClick}
              type="button"
            >
              {action.labelText}
            </ExtendedFAB>
          )}
        </NavigationDrawerActionArea>
      )}
      <NavigationDrawerItems>
        {items.map((item, index) => {
          if (item.href) {
            return (
              //   <NavigationDrawerItem
              //     key={index}
              //     icon={item.icon}
              //     labelText={item.labelText}
              //     to={item.href}
              //     component={Link}
              //     active={item.active}
              //   />
              <NavigationLinkComponent key={index} {...item} />
            )
          } else if (item.onClick) {
            return (
              <NavigationDrawerItem
                key={index}
                icon={item.icon}
                labelText={item.labelText}
                onClick={item.onClick}
                component="button"
                active={item.active}
              />
            )
          } else if (item.externalHref) {
            return (
              <NavigationDrawerItem
                key={index}
                icon={item.icon}
                labelText={item.labelText}
                href={item.externalHref}
                component="a"
                active={item.active}
              />
            )
          } else {
            return <></>
          }
        })}
      </NavigationDrawerItems>
    </NavigationDrawerContainer>
  )
}
