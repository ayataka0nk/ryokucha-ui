import { Button } from '@/Button'
import { IconButton } from '@/IconButton/IconButton'
import { TextField } from '@/TextField'
import { forwardRef } from 'react'
import styles from './styles.module.scss'

type Props = {
  date: string
  onDateChange: (date: string) => void
  onCancelClick: () => void
  onAcceptClick: () => void
  errors: string[]
}
export const ModalDateInput = forwardRef<HTMLInputElement, Props>(
  (
    { date, onDateChange, onCancelClick, onAcceptClick, errors },
    forwardedRef
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      onDateChange(e.target.value)
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        onAcceptClick()
      }
    }

    const handleKeyDownStopEvent: React.KeyboardEventHandler<
      HTMLButtonElement
    > = (event) => {
      if (event.key === 'Enter') {
        event.stopPropagation()
      }
    }

    return (
      <div className={styles['modal-date-input']} onKeyDown={handleKeyDown}>
        <p className={styles['modal-header']}>Select date</p>
        <div className={styles['title-box']}>
          <p className={styles['title']}>Enter dates</p>
          <IconButton
            variant="standard"
            icon="Calendar"
            iconVariant="solid"
            type="button"
          />
        </div>

        <div className={styles['text-field-wrapper']}>
          <TextField
            ref={forwardedRef}
            variant="outlined"
            label="Date"
            layer="surface-container-high"
            placeholder="yyyy/mm/dd"
            value={date}
            onChange={handleChange}
            error={errors.join('')}
          />
        </div>
        <div className={styles['buttons-box']}>
          <Button
            variant="text"
            type="button"
            onClick={onCancelClick}
            onKeyDown={handleKeyDownStopEvent}
          >
            Cancel
          </Button>
          <Button
            variant="text"
            type="button"
            onClick={onAcceptClick}
            onKeyDown={handleKeyDownStopEvent}
          >
            OK
          </Button>
        </div>
      </div>
    )
  }
)
