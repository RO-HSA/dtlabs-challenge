import { createBrowserRouter } from "react-router-dom"
import Home from '@/pages/Home'
import Dashboard from "@/components/Dashboard"
import Profile from "./components/Profile"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]

  }
])

export default router
