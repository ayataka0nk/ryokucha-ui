import { IconType } from '@/Icon'
import { Layer } from '@/types'
import React from 'react'

export type NavigationActionType = {
  icon: IconType
  labelText: string
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type NavigationItemType = {
  icon: IconType
  labelText: string
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  externalHref?: string
  active: boolean
}

export type NavigationProps = {
  modalBgClass?: string
  logo: React.ReactNode
  action?: NavigationActionType
  items: NavigationItemType[]
  fabHidden?: boolean
  layer?: Layer
}
