import { FC } from 'react'
import { getCurrentDate } from '@/utils/DateTime'
import styles from './customDate.module.css'

interface Props {
  fontSize?: string,
  className?: string
}

const CustomDate: FC<Props> = ({ className, fontSize = '32px' }) => {
  const currentDate = getCurrentDate()

  return (
    <>
      <p style={{fontSize}} className={[styles.date, className].join(" ")}>{ currentDate }</p>
    </>
  )
}

export default CustomDate
