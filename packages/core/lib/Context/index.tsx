import { NavigationContextProps, NavigationContextProvider } from '@/Navigation'

export type RyokuchaContextProps = NavigationContextProps

export const RyokuchaProvider = ({
  children,
  linkPropName,
  LinkComponent
}: {
  children: React.ReactNode
} & RyokuchaContextProps) => {
  return (
    <NavigationContextProvider
      linkPropName={linkPropName}
      LinkComponent={LinkComponent}
    >
      {children}
    </NavigationContextProvider>
  )
}
