import { TopAppBar } from '@/AppBar'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'
import { NavigationTopAppBar } from '@/Navigation'
import { Logo } from '../../layout/UserNavigation/Logo'
import { SinglePaneFrame } from '@/Layout'
import { Layout } from '../../layout/Layout'
import { SinglePaneContent } from '@/Layout/SinglePane/SinglePaneContent'

export const AppBarPage = () => {
  return (
    <Layout>
      <SinglePaneFrame>
        <NavigationTopAppBar logo={<Logo />} />
        <SinglePaneContent>
          <ViewBox title="AppBar">
            <ViewBlock>
              <TopAppBar
                leadingIcon="Bars3"
                logo="Logo Sample"
                className="bg-surface-container"
              />
            </ViewBlock>
          </ViewBox>
        </SinglePaneContent>
      </SinglePaneFrame>
    </Layout>
  )
}
