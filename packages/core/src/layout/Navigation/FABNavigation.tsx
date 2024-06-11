import { FAB } from '@/Button'
import { NavigationActionType } from '@/Navigation'
import { FABNavigationTemplate } from '@/Navigation/FABNavigationTemplate'
import { Link } from 'react-router-dom'

const ActionLinkComponent = (props: NavigationActionType) => {
  return (
    <FAB
      size="large"
      color="primary"
      icon="Pencil"
      to={props.href || ''}
      floating
      component={Link}
    />
  )
}

export const FABNavigation = (props: NavigationActionType) => {
  return (
    <FABNavigationTemplate
      action={props}
      ActionLinkComponent={ActionLinkComponent}
    />
  )
}
