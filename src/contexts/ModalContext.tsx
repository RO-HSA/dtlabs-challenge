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
  title: string;
  content: SalesChartType[];
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<SalesChartType[]>>;
}

export const ModalContext = createContext<ModalContextType>({
  isVisible: false,
  title: '',
  content: [],
  setIsVisible: () => {},
  setTitle: () => {},
  setContent: () => {},
})

interface ProviderProps {
  children: ReactNode
}

export const ModalContextProvider: FC<ProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<SalesChartType[]>([])

  return (
    <ModalContext.Provider value={{ isVisible, setIsVisible, title, setTitle, content, setContent }}>
      {children}
    </ModalContext.Provider>
  )
}
