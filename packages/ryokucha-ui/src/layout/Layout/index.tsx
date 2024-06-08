import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { NavigationDrawerStandard } from '../Navigation'

export const Layout = () => {
  return (
    <div className={`${styles['root']} light`}>
      {/* <div className={styles["side-nav"]}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div> */}
      <NavigationDrawerStandard />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  )
}
