import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    navigate('/dashboard')
  }
  const onError = (error: Error) => { console.log(error) }
  const mutation = useLoginMutation(onSuccess, onError)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    mutation.mutate({ username, password })
  }

  return (
    <div className={wrapper}>
      <form className={form} onSubmit={handleSubmit}>
        <div className={inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' disabled={mutation.isPending} onChange={(e) => setUsername(e.target.value)} value={username} required autoFocus autoComplete='username'/>
        </div>
        <div className={inputGroup}>
          <label htmlFor="password">Senha</label>
          <input type="password" id='password' disabled={mutation.isPending} onChange={(e) => setPassword(e.target.value)} value={password} required autoComplete='current-password' />
      </div>
      <div className={btnContainer}>
        {mutation.isPending ? (
          <Loading />
        ) : (
          <button type="submit" className={loginBtn}>Login</button>

        )}
      </div>
      </form>
    </div>
  )
}

export default LoginForm
