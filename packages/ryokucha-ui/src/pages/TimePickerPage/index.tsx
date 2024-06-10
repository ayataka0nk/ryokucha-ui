import { TimeField } from '@/TimePicker'
import { ViewBlock } from '../../common/ViewBlock'
import { ViewBox } from '../../common/ViewBox'
import { useState } from 'react'
import { Button } from '@/Button'

export const TimePickerPage = () => {
  return (
    <div>
      <h1>Time Picker Page</h1>
      <ViewBox title="Time Picker">
        <ViewBlock>
          <Controlled />
        </ViewBlock>
        <ViewBlock>
          <ControlledDefaultValue />
        </ViewBlock>
        <ViewBlock>
          <Uncontrolled />
        </ViewBlock>
        <ViewBlock>
          <UncontrolledDefaultValue />
        </ViewBlock>
      </ViewBox>
    </div>
  )
}

const Controlled = () => {
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={() => {
        alert(value)
      }}
    >
      <TimeField
        label="controlled"
        layer="surface-container-lowest"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Button>submit</Button>
    </form>
  )
}

const ControlledDefaultValue = () => {
  const [value, setValue] = useState('16:00')
  return (
    <form
      onSubmit={() => {
        alert(value)
      }}
    >
      <TimeField
        label="controlled"
        layer="surface-container-lowest"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Button>submit</Button>
    </form>
  )
}

const Uncontrolled = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        alert(formData.get('uncontrolled'))
      }}
    >
      <TimeField
        name="uncontrolled"
        label="uncontrolled"
        layer="surface-container-lowest"
      />
      <Button>submit</Button>
    </form>
  )
}

const UncontrolledDefaultValue = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        alert(formData.get('uncontrolled'))
      }}
    >
      <TimeField
        name="uncontrolled"
        label="uncontrolled"
        layer="surface-container-lowest"
        defaultValue="16:00"
      />
      <Button>submit</Button>
    </form>
  )
}
