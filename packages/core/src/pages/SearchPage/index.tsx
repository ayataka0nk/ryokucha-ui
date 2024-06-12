import { SearchBar } from '@/Search/SearchBar/SearchBar'
import { ViewBlock } from '../../common/ViewBlock'
import { ViewBox } from '../../common/ViewBox'
import { SearchForm } from '@/Search/SearchForm/SearchForm'
import { useRef } from 'react'

export const SearchPage = () => {
  return (
    <div>
      <h1>Search Page</h1>
      <ViewBox title="Search Bar">
        <ViewBlock>
          <SearchBar
            searchedValue=""
            isViewOpen={false}
            layer="surface"
            handleBackClick={() => {}}
            handleMenuClick={() => {}}
            handleClearClick={() => {}}
          />
        </ViewBlock>
        <ViewBlock>
          <SearchBar
            searchedValue=""
            isViewOpen={true}
            layer="surface"
            handleBackClick={() => {}}
            handleMenuClick={() => {}}
            handleClearClick={() => {}}
          />
        </ViewBlock>
      </ViewBox>
      <ViewBox title="Search Field">
        {/* <ViewBlock>
          <SearchField
            searchedValue=""
            isViewOpen={true}
            layer="surface"
            onBackClick={() => {}}
            onMenuClick={() => {}}
            onClearClick={() => {}}
          >
            <InputValueItem value="" onClick={() => {}} />
            <HistoryItem value="history sample" onClick={() => {}} />
          </SearchField>
        </ViewBlock> */}
        <ViewBlock>
          <SearchFormSample />
        </ViewBlock>
      </ViewBox>
    </div>
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
