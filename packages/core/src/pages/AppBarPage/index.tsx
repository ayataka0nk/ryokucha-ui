import { TopAppBar } from '@/AppBar'

export const AppBarPage = () => {
  return (
    <div className="grid gap-4">
      <div className="w-96">
        <div>
          <TopAppBar
            leadingIcon="Bars3"
            logo="Logo Sample"
            className="bg-surface-container"
          />
        </div>
      </div>
    </div>
  )
}
