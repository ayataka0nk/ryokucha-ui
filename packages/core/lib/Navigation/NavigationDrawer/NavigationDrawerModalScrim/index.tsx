import { Transition } from '@headlessui/react'
import styles from './styles.module.scss'

type Props = {
  isDrawerModalOpen: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
}
export const NavigationDrawerModalScrim = ({
  isDrawerModalOpen,
  onClick
}: Props) => {
  return (
    <Transition
      className={`${styles['navigation-drawer-modal-scrim']}`}
      as="div"
      show={isDrawerModalOpen}
      enter={styles['enter']}
      enterFrom={styles['enter-from']}
      enterTo={styles['enter-to']}
      leave={styles['leave']}
      leaveFrom={styles['leave-from']}
      leaveTo={styles['leave-to']}
      onClick={onClick}
    ></Transition>
  )
}
