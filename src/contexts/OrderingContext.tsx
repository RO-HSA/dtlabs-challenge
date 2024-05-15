import { createContext, FC, ReactNode, useState } from 'react'

export const OrderingContext = createContext({
  order: 'asc',
  setOrder: (order: string) => {}
})

interface ProviderProps {
  children: ReactNode
}

export const OrderingContextProvider: FC<ProviderProps> = ({ children }) => {
  const [order, setOrder] = useState('asc')

  return (
    <OrderingContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderingContext.Provider>
  )
}
