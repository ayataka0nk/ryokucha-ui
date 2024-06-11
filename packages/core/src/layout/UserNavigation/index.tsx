import { NavigationActionType } from '../Navigation'
import { NavigationDrawerModal } from '../Navigation/NavigationDrawerModal'
import { NavigationDrawerStandard } from '../Navigation/NavigationDrawerStandard'
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
      <NavigationDrawerStandard
        layer="surface-container"
        logo={<Logo />}
        action={navigationAction}
        items={items}
      />
    </>
  )
}
