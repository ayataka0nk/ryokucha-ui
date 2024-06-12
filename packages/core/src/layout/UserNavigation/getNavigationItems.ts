import { NavigationItemType } from '@/Navigation'

export type PageKey =
  | 'AppBar'
  | 'Button'
  | 'Card'
  | 'DatePicker'
  | 'Dialog'
  | 'Search'
  | 'TextField'
  | 'TimePicker'

export const pages: {
  [key in PageKey]: string
} = {
  AppBar: '/appbar',
  Button: '/button',
  Card: '/card',
  DatePicker: '/datepicker',
  Dialog: '/dialog',
  Search: '/search',
  TextField: '/textfield',
  TimePicker: '/timepicker'
}

export const getPageKeyFromPath = (path: string): PageKey => {
  const pageKey = Object.keys(pages).find((key) =>
    path.includes(pages[key as PageKey])
  )
  return pageKey as PageKey
}

export const getNavigationItems = ({ pageKey }: { pageKey: PageKey }) => {
  const items: NavigationItemType[] = [
    {
      icon: 'RectangleGroup',
      labelText: 'AppBar',
      href: pages.AppBar,
      active: pageKey === 'AppBar'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Button',
      href: pages.Button,
      active: pageKey === 'Button'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Card',
      href: pages.Card,
      active: pageKey === 'Card'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'DatePicker',
      href: pages.DatePicker,
      active: pageKey === 'DatePicker'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Dialog',
      href: pages.Dialog,
      active: pageKey === 'Dialog'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Search',
      href: pages.Search,
      active: pageKey === 'Search'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'TextField',
      href: pages.TextField,
      active: pageKey === 'TextField'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'TimePicker',
      href: pages.TimePicker,
      active: pageKey === 'TimePicker'
    }
  ]
  return items
}
