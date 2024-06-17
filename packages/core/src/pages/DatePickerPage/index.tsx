import { DateFieldModal } from '@/DatePicker'
import { ViewBox } from '../../common/ViewBox'
import { ViewBlock } from '../../common/ViewBlock'
import React, { useState } from 'react'
import { Button } from '@/Button'
import { Layout } from '../../layout/Layout'
import { SinglePaneFrame } from '@/Layout'
import { NavigationTopAppBar } from '@/Navigation'
import { Logo } from '../../layout/UserNavigation/Logo'
import { SinglePaneContent } from '@/Layout/SinglePane/SinglePaneContent'

export const DatePickerPage = () => {
  return (
    <Layout>
      <SinglePaneFrame>
        <NavigationTopAppBar logo={<Logo />} />
        <SinglePaneContent>
          <ViewBox title="Date Picker">
            <ViewBlock>
              <DateFieldModal label="hoge" layer="surface-container-lowest" />
            </ViewBlock>
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
  const [value, setValue] = useState<string>('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    alert(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <DateFieldModal
        label="controlled"
        layer="surface-container-lowest"
        value={value}
        onChange={handleChange}
      />
      <Button>submit</Button>
    </form>
  )
}

const ControlledDefaultValue = () => {
  const [value, setValue] = useState<string>('2022-04-01')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    alert(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <DateFieldModal
        label="controlled default value"
        layer="surface-container-lowest"
        value={value}
        onChange={handleChange}
      />
      <Button>submit</Button>
    </form>
  )
}

const Uncontrolled = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    alert(form.get('uncontrolled'))
  }
  return (
    <form onSubmit={handleSubmit}>
      <DateFieldModal
        name="uncontrolled"
        label="uncontrolled"
        layer="surface-container-lowest"
      />
      <Button>submit</Button>
    </form>
  )
}

const UncontrolledDefaultValue = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    alert(form.get('uncontrolled'))
  }
  return (
    <form onSubmit={handleSubmit}>
      <DateFieldModal
        name="uncontrolled"
        label="uncontrolled default value"
        layer="surface-container-lowest"
        defaultValue="2022-04-02"
      />
      <Button>submit</Button>
    </form>
  )
}
