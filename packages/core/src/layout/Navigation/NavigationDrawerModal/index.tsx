import { NavigationDrawerModalTemplate } from '@/Navigation/NavigationDrawerModalTemplate'
import { NavigationProps } from '@/Navigation/types'
import { Link } from 'react-router-dom'

export const NavigationDrawerModal = (props: NavigationProps) => {
  return (
    <NavigationDrawerModalTemplate
      {...props}
      linkPropName="to"
      LinkComponent={Link}
    />
  )
}
