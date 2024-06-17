import { ViewBlock } from '../../common/ViewBlock'
import { ViewBox } from '../../common/ViewBox'
import { SearchForm } from '@/Search/SearchForm/SearchForm'
import { useRef } from 'react'
import { Layout } from '../../layout/Layout'
import { SinglePaneFrame } from '@/Layout'
import { NavigationTopAppBar } from '@/Navigation'
import { Logo } from '../../layout/UserNavigation/Logo'
import { SinglePaneContent } from '@/Layout/SinglePane/SinglePaneContent'

export const SearchPage = () => {
  return (
    <Layout>
      <SinglePaneFrame>
        <NavigationTopAppBar logo={<Logo />} />
        <SinglePaneContent>
          <ViewBox title="Search Field">
            <ViewBlock>
              <SearchFormSample />
            </ViewBlock>
          </ViewBox>
        </SinglePaneContent>
      </SinglePaneFrame>
    </Layout>
  )
}

const SearchFormSample = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleTagClick = () => {
    if (inputRef.current === null || buttonRef.current === null) {
      return
    }
    if (inputRef.current.value === 'tag-sample') {
      inputRef.current.value = ''
    } else {
      inputRef.current.value = 'tag-sample'
    }

    buttonRef.current.click()
  }
  return (
    <SearchForm
      name="keyw"
      placeholder="Search"
      searchedValue=""
      historyKey="rejrej"
      onMenuClick={() => {}}
      onSubmit={(formdata) => {
        const keyword = formdata.get('keyw') as string
        const tag = formdata.get('hoge') as string
        console.log('submit!')
        console.log(keyword)
        console.log(tag)
      }}
    >
      <div>
        <button type="button" onClick={handleTagClick}>
          タグ
        </button>
        <button ref={buttonRef} type="submit" />
        <input ref={inputRef} name="hoge" type="hidden" />
      </div>
    </SearchForm>
  )
}
