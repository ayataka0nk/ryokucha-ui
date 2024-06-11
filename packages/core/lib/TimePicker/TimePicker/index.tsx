import { forwardRef } from 'react'
import { TimePickerCommonProps } from '../types'
import { TimeInputPicker } from '../TimeInputPicker'

export const TimePicker = forwardRef<HTMLDivElement, TimePickerCommonProps>(
  (props, ref) => {
    return <TimeInputPicker ref={ref} {...props} />
  }
)
