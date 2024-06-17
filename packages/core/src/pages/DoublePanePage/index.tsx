import { DoublePaneFrame, FirstPane, SecondPane } from '@/Layout/DoublePane'
import { Layout } from '../../layout/Layout'
import { SearchForm } from '@/Search'
import { NavigationTopAppBar, useNavigationContext } from '@/Navigation'
import { Card } from '@/Card'
import { Logo } from '../../layout/UserNavigation/Logo'

export const DoublePanePage = () => {
  const { setIsDrawerModalOpen } = useNavigationContext()
  const handleMenuClick = () => {
    setIsDrawerModalOpen(true)
  }

  return (
    <Layout>
      <DoublePaneFrame>
        <FirstPane>
          <SearchForm
            name="foo"
            searchedValue=""
            historyKey="foo"
            onMenuClick={handleMenuClick}
          />
          <h1>First Pane</h1>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <Card layer="surface-container-lowest">hoge</Card>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
        </FirstPane>
        <SecondPane>
          <NavigationTopAppBar logo={<Logo />} />
          <h1>Second Pane</h1>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <Card layer="surface-container-lowest">hoge</Card>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
        </SecondPane>
      </DoublePaneFrame>
    </Layout>
  )
}
