import { Button } from '@/Button'
import { Dialog } from '@/Dialog'
import { useDialogRef } from '@/Dialog/useDialog'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'
import { SinglePaneContent } from '@/Layout/SinglePane/SinglePaneContent'
import { Layout } from '../../layout/Layout'
import { SinglePaneFrame } from '@/Layout'
import { NavigationTopAppBar } from '@/Navigation'
import { Logo } from '../../layout/UserNavigation/Logo'

export const DialogPage = () => {
  const [ref, showModal, closeModal] = useDialogRef()
  return (
    <Layout>
      <SinglePaneFrame>
        <NavigationTopAppBar logo={<Logo />} />
        <SinglePaneContent>
          <ViewBox title="Dialog">
            <ViewBlock>
              <Button
                onClick={() => {
                  showModal()
                }}
              >
                Open
              </Button>
              <Dialog
                ref={ref}
                headline="headaaaaa"
                supportingText="sup"
                leftButton={
                  <Button variant="text" onClick={closeModal}>
                    閉じる
                  </Button>
                }
              ></Dialog>
            </ViewBlock>
          </ViewBox>
        </SinglePaneContent>
      </SinglePaneFrame>
    </Layout>
  )
}
