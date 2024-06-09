import { DateFieldModal } from '@/DatePicker'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'

export const DatePickerPage = () => {
  return (
    <div>
      <h1>Date Picker Page</h1>
      <ViewBox title="Date Picker">
        <ViewBlock>
          <DateFieldModal label="hoge" layer="surface-container-lowest" />
        </ViewBlock>
      </ViewBox>
    </div>
  )
}
