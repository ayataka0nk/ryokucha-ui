import {
  NavigationActionType,
  NavigationDrawerModalTemplate,
  NavigationDrawerTemplate,
  NavigationRailTemplate
} from '@/Navigation'

import { Logo } from './Logo'
import { PageKey, getNavigationItems } from './getNavigationItems'

type Props = {
  pageKey: PageKey
  navigationAction?: NavigationActionType
}
export const UserNavigations = ({ pageKey, navigationAction }: Props) => {
  const items = getNavigationItems({ pageKey: pageKey })
  return (
    <>
      <NavigationDrawerModalTemplate
        layer="surface-container-low"
        logo={<Logo />}
        items={items}
      />
      <NavigationRailTemplate
        layer="surface-container"
        logo={<Logo />}
        action={navigationAction}
        items={items}
      />
      <NavigationDrawerTemplate
        layer="surface-container"
        logo={<Logo />}
        action={navigationAction}
        items={items}
      />
    </>
  )
}
