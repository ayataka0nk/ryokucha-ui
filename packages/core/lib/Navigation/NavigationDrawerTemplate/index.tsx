import {
  NavigationDrawerActionArea,
  NavigationDrawerHeader,
  NavigationDrawerItem,
  NavigationDrawerItems
} from '@/Navigation/NavigationDrawer'
import { NavigationProps } from '../types'
import { ExtendedFAB } from '@/Button'
import { NavigationDrawerContainer } from '@/Navigation/NavigationDrawer/NavigationDrawerContainer'
import styles from './styles.module.scss'
import { useNavigationContext } from '../NavigationContext'

export const NavigationDrawerTemplate = ({
  logo,
  action,
  items,
  layer = 'surface-container'
}: NavigationProps) => {
  const { linkPropName, LinkComponent } = useNavigationContext()
  return (
    <NavigationDrawerContainer layer={layer}>
      <NavigationDrawerHeader>{logo}</NavigationDrawerHeader>
      {action && (
        <NavigationDrawerActionArea>
          {action.href && (
            <ExtendedFAB
              className={styles['action-fab']}
              icon={action.icon}
              {...{
                [linkPropName]: action.href,
                component: LinkComponent
              }}
            >
              {action.labelText}
            </ExtendedFAB>
          )}
          {action.onClick && (
            <ExtendedFAB
              className={styles['action-fab']}
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
            const itemProps = {
              icon: item.icon,
              labelText: item.labelText,
              [linkPropName]: item.href,
              component: LinkComponent,
              active: item.active
            }
            console.log(item.href)
            return <NavigationDrawerItem key={index} {...itemProps} />
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
