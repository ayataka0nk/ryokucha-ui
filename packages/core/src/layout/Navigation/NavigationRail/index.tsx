import { Link } from 'react-router-dom'
import { NavigationProps } from '@/Navigation/types'
import { NavigationRailTemplate } from '@/Navigation/NavigationRailTemplate'

export const NavigationRail = ({ ...props }: NavigationProps) => {
  return (
    <NavigationRailTemplate {...props} LinkComponent={Link} linkPropName="to" />
  )
}
