import { Button } from '@/Button'
import { Dialog } from '@/Dialog'
import { useDialogRef } from '@/Dialog/useDialog'

export const DialogPage = () => {
  const [ref, showModal, closeModal] = useDialogRef()
  return (
    <div>
      <button
        onClick={() => {
          showModal()
        }}
      >
        Open
      </button>
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

      <div></div>
    </div>
  )
}
