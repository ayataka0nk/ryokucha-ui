import { TimeField } from '@/TimePicker'
import { ViewBlock } from '../../common/ViewBlock'
import { ViewBox } from '../../common/ViewBox'
import { useState } from 'react'
import { Button } from '@/Button'
import { Layout } from '../../layout/Layout'
import { SinglePaneFrame } from '@/Layout'
import { NavigationTopAppBar } from '@/Navigation'
import { Logo } from '../../layout/UserNavigation/Logo'
import { SinglePaneContent } from '@/Layout/SinglePane/SinglePaneContent'

export const TimePickerPage = () => {
  return (
    <Layout>
      <SinglePaneFrame>
        <NavigationTopAppBar logo={<Logo />} />
        <SinglePaneContent>
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
        </SinglePaneContent>
      </SinglePaneFrame>
    </Layout>
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
        layer="surface"
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
        layer="surface"
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
      <TimeField name="uncontrolled" label="uncontrolled" layer="surface" />
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
        layer="surface"
        defaultValue="16:00"
      />
      <Button>submit</Button>
    </form>
  )
}
