import { createBrowserRouter } from "react-router-dom"
import Home from '@/pages/Home'
import Dashboard from "@/components/Dashboard"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]

  }
])

export default router
