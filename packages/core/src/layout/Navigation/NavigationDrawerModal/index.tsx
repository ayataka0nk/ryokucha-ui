import { useNavigationContext } from '../NavigationContext'
import { NavigationProps } from '../types'
import React, { MouseEventHandler } from 'react'
import {
  NavigationDrawerItem,
  NavigationDrawerItems
} from '@/Navigation/NavigationDrawer'
import { Link } from 'react-router-dom'
import { NavigationDrawerModalContainer } from '@/Navigation/NavigationDrawer/NavigationDrawerModalContainer'
import { NavigationDrawerModalHeader } from '@/Navigation/NavigationDrawer/NavigationDrawerModalHeader'
import { Layer } from '@/types'

export const NavigationDrawerModal = ({
  logo,
  items,
  layer = 'surface-container-low'
}: NavigationProps & {
  layer?: Layer
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
                <NavigationDrawerItem
                  key={index}
                  icon={item.icon}
                  labelText={item.labelText}
                  to={item.href}
                  component={Link}
                  onClick={handleCloseClick}
                  active={item.active}
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
