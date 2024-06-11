import { SearchBar } from '@/Search/SearchBar/SearchBar'
import { ViewBlock } from '../../common/ViewBlock'
import { ViewBox } from '../../common/ViewBox'
import { SearchField } from '@/Search/SearchField'
import { InputValueItem } from '@/Search/ViewItems/InputValueItem'
import { HistoryItem } from '@/Search/ViewItems/HistoryItem'

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
        <ViewBlock>
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
        </ViewBlock>
      </ViewBox>
    </div>
  )
}
