import { NavigationDrawerItems } from '@/Navigation/NavigationDrawer/NavigationDrawerItems'
import { NavigationDrawerHeader } from '../../../lib/Navigation/NavigationDrawer/NavigationDrawerHeader'
import styles from './styles.module.scss'
import { NavigationDrawerItem } from '@/Navigation/NavigationDrawer/NavigationDrawerItem'
import { Link } from 'react-router-dom'
export const NavigationDrawerStandard = () => {
  return (
    <nav className={styles['nav']}>
      <NavigationDrawerHeader icon="Bars3">Ryokucha-UI</NavigationDrawerHeader>
      <NavigationDrawerItems>
        <NavigationDrawerItem
          labelText="AppBar"
          to="/appbar"
          component={Link}
        />
        <NavigationDrawerItem
          labelText="Button"
          to="/button"
          component={Link}
        />
        <NavigationDrawerItem labelText="Card" to="/card" component={Link} />
        <NavigationDrawerItem
          labelText="DatePicker"
          to="/datepicker"
          component={Link}
        />
        <NavigationDrawerItem
          labelText="Dialog"
          to="/dialog"
          component={Link}
        />
        <NavigationDrawerItem
          labelText="Search"
          to="/search"
          component={Link}
        />
        <NavigationDrawerItem
          labelText="TextField"
          to="/textfield"
          component={Link}
        />
        <NavigationDrawerItem
          labelText="TimePicker"
          to="/timepicker"
          component={Link}
        />
      </NavigationDrawerItems>
    </nav>
  )
}
