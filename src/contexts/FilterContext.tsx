import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

interface FilterContextType {
  year: string
  seller: string
  setYear: Dispatch<SetStateAction<string>>
  setSeller: Dispatch<SetStateAction<string>>
}

export const FilterContext = createContext<FilterContextType>({
  year: '',
  seller: '',
  setYear: () => {},
  setSeller: () => {}
})

interface ProviderProps {
  children: ReactNode
}

export const FilterContextProvider: FC<ProviderProps> = ({ children }) => {
  const [year, setYear] = useState('')
  const [seller, setSeller] = useState('')

  return (
    <FilterContext.Provider value={{ year, setYear, seller, setSeller }}>
      {children}
    </FilterContext.Provider>
  )
}
