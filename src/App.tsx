import { RouterProvider } from 'react-router-dom'

import { OrderingContextProvider } from './contexts/OrderingContext'
import router from './routes'

function App() {
  return (
    <OrderingContextProvider>
      <RouterProvider router={router} />
    </OrderingContextProvider>
  )
}

export default App
