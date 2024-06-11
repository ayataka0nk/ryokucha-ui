import { useNavigationContext } from '../NavigationContext'
import { NavigationItemType, NavigationProps } from '../types'
import React, { MouseEventHandler } from 'react'
import {
  NavigationDrawerItem,
  NavigationDrawerItems,
  NavigationDrawerModalContainer,
  NavigationDrawerModalHeader
} from '@/Navigation/NavigationDrawer'

export const NavigationDrawerModalTemplate = ({
  logo,
  items,
  layer = 'surface-container-low',
  NavigationLinkComponent
}: NavigationProps & {
  NavigationLinkComponent: (props: NavigationItemType) => JSX.Element
}) => {
  const { isDrawerModalOpen, setIsDrawerModalOpen } = useNavigationContext()
  const handleCloseClick = () => {
    setIsDrawerModalOpen(false)
  }
  const handleNavigationDrawerModalScrimClick = () => {
    setIsDrawerModalOpen(false)
  }
  return (
    <>
      <NavigationDrawerModalContainer
        layer={layer}
        isOpen={isDrawerModalOpen}
        onScrimClick={handleNavigationDrawerModalScrimClick}
      >
        <NavigationDrawerModalHeader onCloseClick={handleCloseClick}>
          {logo}
        </NavigationDrawerModalHeader>
        <NavigationDrawerItems>
          {items.map((item, index) => {
            if (item.href) {
              return (
                // <NavigationDrawerItem
                //   key={index}
                //   icon={item.icon}
                //   labelText={item.labelText}
                //   to={item.href}
                //   component={Link}
                //   onClick={handleCloseClick}
                //   active={item.active}
                // />
                <div onClick={handleCloseClick}>
                  <NavigationLinkComponent key={index} {...item} />
                </div>
              )
            } else if (item.onClick) {
              const handleOnClick: MouseEventHandler<HTMLButtonElement> = (
                event
              ) => {
                handleCloseClick()
                item.onClick && item.onClick(event)
              }
              //TODO standard と modalのitemは共通化できる
              return (
                <NavigationDrawerItem
                  key={index}
                  icon={item.icon}
                  labelText={item.labelText}
                  onClick={handleOnClick}
                  component="button"
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
                />
              )
            } else {
              return <React.Fragment key={index} />
            }
          })}
        </NavigationDrawerItems>
      </NavigationDrawerModalContainer>
    </>
  )
}
