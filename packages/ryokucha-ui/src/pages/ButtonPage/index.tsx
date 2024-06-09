import { ExtendedFAB, FAB } from '@/Button'
import { Button } from '@/index'
import { ViewLine } from '../../common/ViewLine'

export const ButtonPage = () => {
  return (
    <div>
      <h1>Button Page</h1>
      <div>
        <h3>Filled Buttons</h3>
        <ViewLine>
          <Button variant="filled" color="primary">
            Primary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="filled" color="secondary">
            Secondary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="filled" color="tertiary">
            Tertiary
          </Button>
        </ViewLine>
      </div>
      <div>
        <h3>Filled Buttons With Icon</h3>
        <div>
          <Button variant="filled" color="primary" icon="PencilSquare">
            Primary
          </Button>
          <Button variant="filled" color="secondary" icon="PencilSquare">
            Secondary
          </Button>
          <Button variant="filled" color="tertiary" icon="PencilSquare">
            Tertiary
          </Button>
        </div>
      </div>
      <div>
        <h3>Outlined Buttons</h3>
        <div>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="tertiary">
            Tertiary
          </Button>
        </div>
      </div>
      <div>
        <h3>Outlined Buttons With Icon</h3>
        <div>
          <Button variant="outlined" color="primary" icon="PencilSquare">
            Primary
          </Button>
          <Button variant="outlined" color="secondary" icon="PencilSquare">
            Secondary
          </Button>
          <Button variant="outlined" color="tertiary" icon="PencilSquare">
            Tertiary
          </Button>
        </div>
      </div>
      <div>
        <h3>Text Buttons</h3>
        <div>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="tertiary">
            Tertiary
          </Button>
        </div>
      </div>
      <div>
        <h3>Text Buttons With Icon</h3>
        <div>
          <Button variant="text" color="primary" icon="PencilSquare">
            Primary
          </Button>
          <Button variant="text" color="secondary" icon="PencilSquare">
            Secondary
          </Button>
          <Button variant="text" color="tertiary" icon="PencilSquare">
            Tertiary
          </Button>
        </div>
      </div>
      <div>
        <h3>FAB</h3>
        <div>
          <FAB color="primary" icon="PencilSquare" />
          <FAB color="secondary" icon="PencilSquare" />
          <FAB color="tertiary" icon="PencilSquare" />
        </div>
      </div>
      <div>
        <h3>Extended FAB</h3>
        <div>
          <ExtendedFAB color="primary" icon="PencilSquare">
            Primary
          </ExtendedFAB>
          <ExtendedFAB color="secondary" icon="PencilSquare">
            Secondary
          </ExtendedFAB>
          <ExtendedFAB floating color="tertiary" icon="PencilSquare">
            Tertiary
          </ExtendedFAB>
        </div>
      </div>
    </div>
  )
}
