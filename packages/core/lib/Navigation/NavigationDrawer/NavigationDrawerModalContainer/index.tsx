import { Transition } from '@headlessui/react'
import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import { NavigationDrawerModalScrim } from '../NavigationDrawerModalScrim'
import { Layer } from '@/types'

type Props = ComponentProps<'nav'> & {
  isOpen: boolean
  onScrimClick: () => void
  layer: Layer
}
export const NavigationDrawerModalContainer = ({
  children,
  isOpen,
  onScrimClick,
  layer,
  ...props
}: Props) => {
  return (
    <>
      <NavigationDrawerModalScrim
        isDrawerModalOpen={isOpen}
        onClick={onScrimClick}
      />
      <Transition
        className={styles['navigation-drawer-modal-container']}
        as="div"
        show={isOpen}
        enter={styles['enter']}
        enterFrom={styles['enter-from']}
        enterTo={styles['enter-to']}
        leave={styles['leave']}
        leaveFrom={styles['leave-from']}
        leaveTo={styles['leave-to']}
      >
        <nav className={`${styles['navigation']} ${styles[layer]}`} {...props}>
          {children}
        </nav>
      </Transition>
    </>
  )
}
