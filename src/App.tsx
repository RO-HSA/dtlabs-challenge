import { RouterProvider } from 'react-router-dom'

import { OrderingContextProvider } from './contexts/OrderingContext'
import { ModalContextProvider } from './contexts/ModalContext'
import router from './routes'

function App() {
  return (
    <ModalContextProvider>
      <OrderingContextProvider>
        <RouterProvider router={router} />
      </OrderingContextProvider>
    </ModalContextProvider>
  )
}

export default App
