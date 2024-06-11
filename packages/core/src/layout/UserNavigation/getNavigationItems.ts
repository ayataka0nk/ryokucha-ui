import { NavigationItemType } from '../Navigation'

export type PageKey =
  | 'AppBar'
  | 'Button'
  | 'Card'
  | 'DatePicker'
  | 'Dialog'
  | 'Search'
  | 'TextField'
  | 'TimePicker'

export const getNavigationItems = ({ pageKey }: { pageKey: PageKey }) => {
  const items: NavigationItemType[] = [
    {
      icon: 'RectangleGroup',
      labelText: 'AppBar',
      href: '/appbar',
      active: pageKey === 'AppBar'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Button',
      href: '/button',
      active: pageKey === 'Button'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Card',
      href: '/card',
      active: pageKey === 'Card'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'DatePicker',
      href: '/datepicker',
      active: pageKey === 'DatePicker'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Dialog',
      href: '/dialog',
      active: pageKey === 'Dialog'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'Search',
      href: '/search',
      active: pageKey === 'Search'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'TextField',
      href: '/textfield',
      active: pageKey === 'TextField'
    },
    {
      icon: 'RectangleGroup',
      labelText: 'TimePicker',
      href: '/timepicker',
      active: pageKey === 'TimePicker'
    }
  ]
  return items
}
