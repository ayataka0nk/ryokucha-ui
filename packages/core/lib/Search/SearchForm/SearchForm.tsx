import { useRef } from 'react'
import { useSearchFormState } from './useSearchFormState'
import { SearchField } from '../SearchField'
import { HistoryItem } from '../ViewItems/HistoryItem'
import { InputValueItem } from '../ViewItems/InputValueItem'

type Props = {
  className?: string
  name: string
  placeholder: string
  searchedValue: string
  historyKey: string
  onMenuClick: () => void
  onSubmit?: (formData: FormData) => void
  children?: React.ReactNode
}

export const SearchForm = ({
  className,
  name,
  placeholder,
  searchedValue,
  historyKey,
  onSubmit,
  onMenuClick,
  children
}: Props) => {
  const { setIsViewOpen, addHistory, ...state } = useSearchFormState({
    historyKey: historyKey,
    searchedValue: searchedValue
  })
  const ref = useRef<HTMLFormElement>(null)
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setIsViewOpen(false)
    addHistory(state.value)
    if (ref.current === null) {
      return
    }
    const formData = new FormData(ref.current)
    onSubmit && onSubmit(formData)
  }
  return (
    <form ref={ref} className={`${className}`} onSubmit={handleSubmit}>
      <div ref={state.wrapperRef}>
        <SearchField
          name={name}
          placeholder={placeholder}
          ref={state.inputRef}
          value={state.value}
          onChange={state.handleChange}
          searchedValue={searchedValue}
          isViewOpen={state.isViewOpen}
          layer="surface-container-highest"
          onMenuClick={onMenuClick}
          onFocus={state.handleFocus}
          onClearClick={state.handleClearClick}
          onBackClick={state.handleBackClick}
          onClick={() => {
            setIsViewOpen(true)
          }}
        >
          <InputValueItem
            value={state.value}
            onClick={state.handleInputValueItemClick}
          />
          {state.history.map((item, index) => (
            <HistoryItem
              key={index}
              value={item}
              onClick={state.handleHistoryItemClick}
            />
          ))}
          {children}
        </SearchField>
        <button ref={state.buttonRef} className="hidden" type="submit"></button>
      </div>
    </form>
  )
}
