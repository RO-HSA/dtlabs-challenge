import { FC } from 'react'
import styles from './notFound.module.css'

import robot from '@/assets/robot.png'

interface Props {
  message?: string
  errorCode?: string
}

const NotFound: FC<Props> = ({
  message = 'Page not found.',
  errorCode = '404'
}) => {
  const { container, title, error } = styles
  return (
    <div className={container}>
      <div>
        <h2 className={title}>Oops!</h2>
        <h2 className={title}>{message}</h2>
      </div>
      <span className={error}>Error code: {errorCode}</span>
      <img src={robot} alt="Robot" />
    </div>
  )
}

export default NotFound
