import { forwardRef } from 'react'
import { TimePickerInputField } from '../TimePickerInputField'
import { PeriodSelector } from '../PeriodSelector'
import { IconButton } from '@/IconButton/IconButton'
import { Button } from '@/Button'
import { TimePickerCommonProps } from '../types'
import styles from './styles.module.scss'

export const TimeInputPicker = forwardRef<
  HTMLDivElement,
  TimePickerCommonProps
>(
  (
    {
      className,
      hour,
      minute,
      period,
      onHourChange,
      onMinuteChange,
      onPeriodChange,
      onAcceptClick,
      onCancelClick,
      errors
    },
    ref
  ) => {
    const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onHourChange(e.target.value)
    }

    const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onMinuteChange(e.target.value)
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
      <div
        className={`${styles['time-input-picker']} ${className}`}
        ref={ref}
        onKeyDown={handleKeyDown}
      >
        <p className={styles['header']}>Enter time</p>
        <div className={styles['input-field-box']}>
          <TimePickerInputField
            type="text"
            value={hour}
            onChange={handleHourChange}
          />
          <span className={styles['time-separator']}>:</span>
          <TimePickerInputField
            type="text"
            value={minute}
            onChange={handleMinuteChange}
          />
          <PeriodSelector
            className={styles['period-selector']}
            value={period}
            onChange={onPeriodChange}
          />
        </div>
        <div>
          <label className={styles['label-hour']}>Hour</label>
          <label className={styles['label-minute']}>Minute</label>
        </div>
        <p className={styles['error-message']}>{errors.join('')}</p>
        <div className={styles['tools']}>
          <IconButton
            icon="Clock"
            type='button'
            className={styles['clock-icon']}
            onKeyDown={handleKeyDownStopEvent}
          />
          <div className={styles['button']}>
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
      </div>
    )
  }
)
