import { TextField } from '@/TextField'
import { ViewBox } from '../common/ViewBox'
import { ViewBlock } from '../common/ViewBlock'

export const TextFieldPage = () => {
  return (
    <div>
      <h1>TextField Page</h1>
      <ViewBox title="Filled TextField">
        <ViewBlock>
          <TextField id="text-field" label="Text Field" />
        </ViewBlock>
        <ViewBlock>
          <TextField id="text-field" label="テキストフィールド" />
        </ViewBlock>
        <ViewBlock>
          <TextField
            id="text-field"
            label="With Supporting Text"
            supportingText="Supporting text Sample!!"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField
            id="text-field"
            icon="AcademicCap"
            label="With Trailing Icon"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField
            id="text-field"
            icon="AcademicCap"
            label="With Trailing Icon And Supporting Text"
            supportingText="Supporting text Sample!!"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField
            id="text-field"
            icon="AcademicCap"
            label="Error"
            error="Supporting text Sample!!"
          />
        </ViewBlock>
      </ViewBox>
    </div>
  )
}
