import { Card } from '@/Card'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'

export const CardPage = () => {
  return (
    <div>
      <h1>Card Page</h1>
      <ViewBox title="Filled Card">
        <ViewBlock>
          <Card variant="filled">Filled Default</Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="filled" component="button" onClick={() => {}}>
            With Action
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="filled" layer="surface-container-lowest">
            Surface Container lowest
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="filled" layer="surface-container-low">
            Surface Container low
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="filled" layer="surface-container">
            Surface Container
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="filled" layer="surface-container-high">
            Surface Container High
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="filled" layer="surface-container-highest">
            Surface Container Highest
          </Card>
        </ViewBlock>
      </ViewBox>
      <ViewBox title="Elevated Card">
        <ViewBlock>
          <Card variant="elevated">Elevated Default</Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="elevated" component="button" onClick={() => {}}>
            With Action
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="elevated" layer="surface-container-lowest">
            Surface Container lowest
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="elevated" layer="surface-container-low">
            Surface Container low
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="elevated" layer="surface-container">
            Surface Container
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="elevated" layer="surface-container-high">
            Surface Container High
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="elevated" layer="surface-container-highest">
            Surface Container Highest
          </Card>
        </ViewBlock>
      </ViewBox>
      <ViewBox title="Outlined Card">
        <ViewBlock>
          <Card variant="outlined">Outlined Default</Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="outlined" component="button" onClick={() => {}}>
            With Action
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="outlined" layer="surface-container-lowest">
            Surface Container lowest
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="outlined" layer="surface-container-low">
            Surface Container low
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="outlined" layer="surface-container">
            Surface Container
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="outlined" layer="surface-container-high">
            Surface Container High
          </Card>
        </ViewBlock>
        <ViewBlock>
          <Card variant="outlined" layer="surface-container-highest">
            Surface Container Highest
          </Card>
        </ViewBlock>
      </ViewBox>
    </div>
  )
}
