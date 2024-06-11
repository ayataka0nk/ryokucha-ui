import { ExtendedFAB, FAB } from '@/Button'
import { Button } from '@/index'
import { ViewLine } from '../../common/ViewLine'
import { ViewBox } from '../../common/ViewBox'

export const ButtonPage = () => {
  return (
    <div>
      <h1>Button Page</h1>
      <ViewBox title="Filled Buttons">
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
      </ViewBox>
      <ViewBox title="Filled Buttons With Icon">
        <ViewLine>
          <Button variant="filled" color="primary" icon="PencilSquare">
            Primary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="filled" color="secondary" icon="PencilSquare">
            Secondary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="filled" color="tertiary" icon="PencilSquare">
            Tertiary
          </Button>
        </ViewLine>
      </ViewBox>
      <ViewBox title="Outlined Buttons">
        <ViewLine>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="outlined" color="tertiary">
            Tertiary
          </Button>
        </ViewLine>
      </ViewBox>
      <ViewBox title="Outlined Buttons With Icon">
        <ViewLine>
          <Button variant="outlined" color="primary" icon="PencilSquare">
            Primary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="outlined" color="secondary" icon="PencilSquare">
            Secondary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="outlined" color="tertiary" icon="PencilSquare">
            Tertiary
          </Button>
        </ViewLine>
      </ViewBox>
      <ViewBox title="Text Buttons">
        <ViewLine>
          <Button variant="text" color="primary">
            Primary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="text" color="tertiary">
            Tertiary
          </Button>
        </ViewLine>
      </ViewBox>
      <ViewBox title="Text Buttons With Icon">
        <ViewLine>
          <Button variant="text" color="primary" icon="PencilSquare">
            Primary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="text" color="secondary" icon="PencilSquare">
            Secondary
          </Button>
        </ViewLine>
        <ViewLine>
          <Button variant="text" color="tertiary" icon="PencilSquare">
            Tertiary
          </Button>
        </ViewLine>
      </ViewBox>
      <ViewBox title="FAB">
        <ViewLine>
          <FAB color="primary" icon="PencilSquare" />
        </ViewLine>
        <ViewLine>
          <FAB color="secondary" icon="PencilSquare" />
        </ViewLine>
        <ViewLine>
          <FAB color="tertiary" icon="PencilSquare" />
        </ViewLine>
      </ViewBox>
      <ViewBox title="Extended FAB">
        <ViewLine>
          <ExtendedFAB color="primary" icon="PencilSquare">
            Primary
          </ExtendedFAB>
        </ViewLine>
        <ViewLine>
          <ExtendedFAB color="secondary" icon="PencilSquare">
            Secondary
          </ExtendedFAB>
        </ViewLine>
        <ViewLine>
          <ExtendedFAB color="tertiary" icon="PencilSquare">
            Tertiary
          </ExtendedFAB>
        </ViewLine>
      </ViewBox>
    </div>
  )
}
