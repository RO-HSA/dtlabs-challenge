import { RouterProvider } from 'react-router-dom'

import { OrderingContextProvider } from './contexts/OrderingContext'
import router from './routes'
import { ModalContextProvider } from './contexts/ModalContext'

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
