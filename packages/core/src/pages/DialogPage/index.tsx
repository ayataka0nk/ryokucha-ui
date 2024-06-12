import { Button } from '@/Button'
import { Dialog } from '@/Dialog'
import { useDialogRef } from '@/Dialog/useDialog'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'

export const DialogPage = () => {
  const [ref, showModal, closeModal] = useDialogRef()
  return (
    <div>
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
    </div>
  )
}
