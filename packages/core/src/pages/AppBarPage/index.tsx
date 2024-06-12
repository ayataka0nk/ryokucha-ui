import { TopAppBar } from '@/AppBar'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'

export const AppBarPage = () => {
  return (
    <div>
      <ViewBox title="AppBar">
        <ViewBlock>
          <TopAppBar
            leadingIcon="Bars3"
            logo="Logo Sample"
            className="bg-surface-container"
          />
        </ViewBlock>
      </ViewBox>
    </div>
  )
}
