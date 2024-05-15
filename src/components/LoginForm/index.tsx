import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useLoginMutation } from '@/hooks/queries/LoginQueries'
import { TOKEN_KEY } from '@/utils/keys'
import { LoginResponse } from '@/types/login'
import Loading from '@/components/Loading'
import styles from './loginForm.module.css'

const LoginForm = () => {
  const { wrapper, form, inputGroup, loginBtn, btnContainer } = styles
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSuccess = (response: LoginResponse) => {
    localStorage.setItem(TOKEN_KEY, response.data.access_token)
    navigate('/')
  }

  const onError = (error: Error) => {
    if (error.message.includes('401')) {
      toast.error('E-mail ou senha incorreta.')
    }
  }

  const { mutate, isPending } = useLoginMutation(onSuccess, onError)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    mutate({ username, password })
  }

  return (
    <>
      <ToastContainer />
      <div className={wrapper}>
        <form className={form} onSubmit={handleSubmit}>
          <div className={inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              disabled={isPending}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              autoFocus
              autoComplete={username}
            />
          </div>
          <div className={inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              disabled={isPending}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              autoComplete="current-password"
            />
          </div>
          <div className={btnContainer}>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className={loginBtn}>
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
