import { TextField } from '@/TextField'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'
import { Layout } from '../../layout/Layout'
import { SinglePaneFrame } from '@/Layout'
import { NavigationTopAppBar } from '@/Navigation'
import { Logo } from '../../layout/UserNavigation/Logo'
import { SinglePaneContent } from '@/Layout/SinglePane/SinglePaneContent'

export const TextFieldPage = () => {
  return (
    <Layout>
      <SinglePaneFrame>
        <NavigationTopAppBar logo={<Logo />} />
        <SinglePaneContent>
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
                label="With Trailing Icon And Placeholder"
                variant="outlined"
                placeholder="With Placeholder"
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
        </SinglePaneContent>
      </SinglePaneFrame>
    </Layout>
  )
}
