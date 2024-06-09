import { TextField } from '@/TextField'
import { ViewBox } from '../common/ViewBox'
import { ViewBlock } from '../common/ViewBlock'

export const TextFieldPage = () => {
  return (
    <div>
      <h1>TextField Page</h1>
      <ViewBox title="Filled TextField">
        <ViewBlock>
          <TextField label="Text Field" />
        </ViewBlock>
        <ViewBlock>
          <TextField label="テキストフィールド" />
        </ViewBlock>
        <ViewBlock>
          <TextField
            label="With Supporting Text"
            supportingText="Supporting text Sample!!"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField icon="AcademicCap" label="With Trailing Icon" />
        </ViewBlock>
        <ViewBlock>
          <TextField
            icon="AcademicCap"
            label="With Trailing Icon And Supporting Text"
            supportingText="Supporting text Sample!!"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField
            icon="AcademicCap"
            label="Error"
            error="Supporting text Sample!!"
          />
        </ViewBlock>
      </ViewBox>
      <ViewBox title="Outlined TextField">
        <ViewBlock>
          <TextField label="Text Field" variant="outlined" />
        </ViewBlock>
        <ViewBlock>
          <TextField
            label="Text Field"
            variant="outlined"
            placeholder="With Placeholder"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField label="テキストフィールド" variant="outlined" />
        </ViewBlock>
        <ViewBlock>
          <TextField
            label="With Supporting Text"
            supportingText="Supporting text Sample!!"
            variant="outlined"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField
            icon="AcademicCap"
            label="With Trailing Icon"
            variant="outlined"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField
            icon="AcademicCap"
            label="With Trailing Icon And Supporting Text"
            supportingText="Supporting text Sample!!"
            variant="outlined"
          />
        </ViewBlock>
        <ViewBlock>
          <TextField
            icon="AcademicCap"
            label="Error"
            error="Supporting text Sample!!"
            variant="outlined"
          />
        </ViewBlock>
      </ViewBox>
    </div>
  )
}
