import { NavigationActionType } from '@/Navigation'
import { NavigationDrawer } from '../Navigation/NavigationDrawer'
import { NavigationDrawerModal } from '../Navigation/NavigationDrawerModal'

import { NavigationRail } from '../Navigation/NavigationRail'
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
      <NavigationDrawerModal
        layer="surface-container-low"
        logo={<Logo />}
        items={items}
      />
      <NavigationRail
        layer="surface-container"
        logo={<Logo />}
        action={navigationAction}
        items={items}
      />
      <NavigationDrawer
        layer="surface-container"
        logo={<Logo />}
        action={navigationAction}
        items={items}
      />
    </>
  )
}
