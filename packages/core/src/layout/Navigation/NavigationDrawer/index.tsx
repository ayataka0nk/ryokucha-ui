import { NavigationDrawerTemplate } from '@/Navigation/NavigationDrawerTemplate'
import { NavigationProps } from '@/Navigation/types'
import { Link } from 'react-router-dom'

export const NavigationDrawer = (props: NavigationProps) => {
  return (
    <NavigationDrawerTemplate
      {...props}
      linkPropName="to"
      LinkComponent={Link}
    />
  )
}
