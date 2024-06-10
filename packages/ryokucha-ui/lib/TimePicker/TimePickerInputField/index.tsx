import { ComponentPropsWithRef, forwardRef } from 'react'
import styles from './styles.module.scss'

type Props = ComponentPropsWithRef<'input'>
export const TimePickerInputField = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <div className={styles['time-picker-input-field']}>
        <input
          type="text"
          ref={ref}
          className={`${className} ${styles['input']}`}
          maxLength={2}
          {...props}
        />
      </div>
    )
  }
)
