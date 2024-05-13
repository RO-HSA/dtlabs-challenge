import { createBrowserRouter } from "react-router-dom"
import Home from '@/pages/Home'
import Dashboard from "@/components/Dashboard"
import Profile from "./components/Profile"
import NotFound from "./components/NotFound"

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
  },
  {
    path: '/not-found',
    element: <NotFound />
  }
])

export default router
