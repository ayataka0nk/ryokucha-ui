import { Layer } from '@/types'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styles from './styles.module.scss'

export type DialogProps = {
  headline: string
  supportingText: string
  layer?: Layer
  leftButton: JSX.Element
  rightButton?: JSX.Element
} & ComponentPropsWithoutRef<'dialog'>

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  (
    {
      className,
      headline,
      supportingText,
      layer = 'surface-container-high',
      leftButton,
      rightButton,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <dialog
        ref={forwardedRef}
        className={`${className} ${styles[layer]} ${styles['dialog']}`}
        {...props}
      >
        <p className={styles['headline']}>{headline}</p>
        <p className={styles['supporting-text']}>{supportingText}</p>
        <div className={styles['tools']}>
          {leftButton}
          {rightButton}
        </div>
      </dialog>
    )
  }
)
