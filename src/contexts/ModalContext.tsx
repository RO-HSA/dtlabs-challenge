import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState
} from 'react'
import { SalesChartType } from '@/components/Charts/SalesChart'

interface ModalContextType {
  isVisible: boolean;
  content: SalesChartType | null;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setContent: Dispatch<SetStateAction<SalesChartType | null>>;
}

export const ModalContext = createContext<ModalContextType>({
  isVisible: false,
  content: null,
  setIsVisible: () => {},
  setContent: () => {}
})

interface ProviderProps {
  children: ReactNode
}

export const ModalContextProvider: FC<ProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [content, setContent] = useState<SalesChartType | null>(null)

  return (
    <ModalContext.Provider value={{ isVisible, setIsVisible, content, setContent }}>
      {children}
    </ModalContext.Provider>
  )
}
