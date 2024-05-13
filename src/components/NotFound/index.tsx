import styles from './notFound.module.css'

import robot from '@/assets/robot.png'

const NotFound = () => {
  const {container, title, error} = styles
  return (
    <div className={container}>
      <div>
        <h2 className={title}>Oops!</h2>
        <h2 className={title}>Page not found.</h2>
      </div>
      <span className={error}>Error code: 404</span>
      <img src={robot} alt="Robot" />
    </div>
  )
}

export default NotFound
