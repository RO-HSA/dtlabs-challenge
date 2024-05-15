import { RouterProvider } from 'react-router-dom'

import { OrderingContextProvider } from './contexts/OrderingContext'
import { FilterContextProvider } from './contexts/FilterContext'
import router from './routes'

function App() {
  return (
    <FilterContextProvider>
      <OrderingContextProvider>
        <RouterProvider router={router} />
      </OrderingContextProvider>
    </FilterContextProvider>
  )
}

export default App
