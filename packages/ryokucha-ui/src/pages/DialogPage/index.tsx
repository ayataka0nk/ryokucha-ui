import { Button } from '@/Button'
import { useDialog } from '@/Dialog/useDialog'

export const DialogPage = () => {
  const { DialogComponent, showModal, closeModal } = useDialog()
  return (
    <div>
      <button
        onClick={() => {
          showModal()
        }}
      >
        Open
      </button>
      <DialogComponent
        headline="headaaaaa"
        supportingText="sup"
        leftButton={
          <Button variant="text" onClick={closeModal}>
            閉じる
          </Button>
        }
      ></DialogComponent>

      <div></div>
    </div>
  )
}
