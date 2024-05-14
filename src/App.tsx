import { RouterProvider } from 'react-router-dom'

import router from './routes'
import { OrderingContextProvider } from './contexts/OrderingContext'

function App() {
  return (
    <OrderingContextProvider>
      <RouterProvider router={router} />
    </OrderingContextProvider>
  )
}

export default App
