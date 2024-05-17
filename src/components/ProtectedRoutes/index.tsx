import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useProfileQuery } from '@/hooks/queries/ProfileQueries'
import { TOKEN_KEY } from '@/utils/keys'
import { AccessLevel } from '@/utils//enums/AccesLevel'
import Loading from '../Loading'

const ProtectedRoutes = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY)
  )

  const location = useLocation()
  const { data, isLoading } = useProfileQuery()

  useEffect(() => {
    const updateToken = () => {
      setToken(localStorage.getItem(TOKEN_KEY))
    }

    window.addEventListener('storage', updateToken)

    return () => {
      window.removeEventListener('storage', updateToken)
    }
  }, [])

  if (!token) {
    return <Navigate to="/login" replace={true} />
  }

  if (isLoading) {
    return <Loading width="100vw" height="100vh" />
  }

  const routesToCheck = ['/usuarios', '/graficos'].includes(location.pathname)

  if (routesToCheck && data?.access_level !== AccessLevel.LEVEL_1) {
    return <Navigate to="/not-found" replace={true} />
  }

  return <Outlet />
}

export default ProtectedRoutes
