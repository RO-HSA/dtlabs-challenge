import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '@/hooks/queries/LoginQueries'
import Loading from '@/components/Loading'
import styles from './loginForm.module.css'

const LoginForm = () => {
    const { wrapper, form, inputGroup, loginBtn } = styles
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const query = useLoginMutation({ username, password })

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault
      const { data } = query
      if (data) {
        localStorage.setItem('access_token', data.access_token)
        console.log(data)
        navigate('/dashboard')
      }
    }

    return (
        <div className={wrapper}>
          <form className={form} onSubmit={() => handleSubmit}>
            <div className={inputGroup}>
              <label htmlFor="">Email</label>
              <input type="email" onChange={(e) => setUsername(e.target.value)} value={username} required autoFocus autoComplete='username'/>
            </div>
            <div className={inputGroup}>
              <label htmlFor="">Senha</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required autoComplete='current-password' />
            </div>
            <button type="submit" className={loginBtn}>Login</button>
          </form>
        </div>
    )
}

export default LoginForm