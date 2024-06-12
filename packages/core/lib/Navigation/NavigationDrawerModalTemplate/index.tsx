import { useNavigationContext } from '../NavigationContext'
import { NavigationProps } from '../types'
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
  layer = 'surface-container-low'
}: NavigationProps) => {
  const {
    isDrawerModalOpen,
    setIsDrawerModalOpen,
    linkPropName,
    LinkComponent
  } = useNavigationContext()
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
                <NavigationDrawerItem
                  key={index}
                  icon={item.icon}
                  labelText={item.labelText}
                  component={LinkComponent}
                  onClick={handleCloseClick}
                  active={item.active}
                  {...{
                    [linkPropName]: item.href
                  }}
                />
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
