import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

interface OrderingContextType {
  order: string
  setOrder: Dispatch<SetStateAction<string>>
}

export const OrderingContext = createContext<OrderingContextType>({
  order: 'asc',
  setOrder: () => {}
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
