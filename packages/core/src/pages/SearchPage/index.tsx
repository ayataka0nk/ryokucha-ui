import { SearchBar } from '@/Search/SearchBar/SearchBar'
import { ViewBlock } from '../../common/ViewBlock'
import { ViewBox } from '../../common/ViewBox'

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
    </div>
  )
}
