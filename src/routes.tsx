import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/pages/RootLayout'
import Login from '@/pages/Login'
import NotFound from './components/NotFound'
import ProtectedRoutes from './components/ProtectedRoutes'
import Loading from './components/Loading'

const Dashboard = lazy(() => import('@/components/Dashboard'))
const Profile = lazy(() => import('@/components/Profile'))
const Users = lazy(() => import('@/components/Users'))
const Charts = lazy(() => import('@/components/Charts'))

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
            element: (
              <Suspense fallback={<Loading width='100vw' height='100vh' />}>
                <Dashboard />
              </Suspense>
            )
          },
          {
            path: '/usuarios',
            element: (
              <Suspense fallback={<Loading width='100vw' height='100vh' />}>
                <Users />
              </Suspense>
            )
          },
          {
            path: '/perfil',
            element: (
              <Suspense fallback={<Loading width='100vw' height='100vh' />}>
                <Profile />
              </Suspense>
            )
          },
          {
            path: '/graficos',
            element: (
              <Suspense fallback={<Loading width='100vw' height='100vh' />}>
                <Charts />
              </Suspense>
            )
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
