import React, { createContext, useContext } from 'react'

export type NavigationContextValue = {
  isDrawerModalOpen: boolean
  setIsDrawerModalOpen: (isOpen: boolean) => void
  linkPropName: string
  LinkComponent: React.ForwardRefExoticComponent<any>
}

export const NavigationContext = createContext<NavigationContextValue | null>(
  null
)

export const useNavigationContext = () => {
  const context = useContext(NavigationContext)
  if (context === null) {
    throw new Error(
      'useNavigationContext must be used within a NavigationProvider'
    )
  }
  return context
}

export const NavigationContextProvider = ({
  children,
  linkPropName,
  LinkComponent
}: {
  children: React.ReactNode
  linkPropName: string
  LinkComponent: React.ForwardRefExoticComponent<any>
}) => {
  const [isDrawerModalOpen, setIsDrawerModalOpen] = React.useState(false)
  return (
    <NavigationContext.Provider
      value={{
        isDrawerModalOpen,
        setIsDrawerModalOpen,
        linkPropName,
        LinkComponent
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
