import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/pages/RootLayout'
import Login from '@/pages/Login'
import Dashboard from '@/components/Dashboard'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import Users from './components/Users'
import ProtectedRoutes from './components/ProtectedRoutes'

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            path: '/',
            element: <Dashboard />
          },
          {
            path: '/usuarios',
            element: <Users />
          },
          {
            path: '/perfil',
            element: <Profile />
          }
        ]
      }
    ]
  },
  {
    path: '/not-found',
    element: <NotFound />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
