import { FC } from 'react'
import { getCurrentDate } from '@/utils/DateTime'
import styles from './customDate.module.css'

interface Props {
  fontSize?: string;
  borderBottom?: string;
  className?: string;
}

const CustomDate: FC<Props> = ({ className, fontSize = '32px', borderBottom = '2px solid var(--border)' }) => {
  const currentDate = getCurrentDate()

  return (
    <div className={styles.dateWrapper}>
      <p style={{ fontSize, borderBottom }} className={[styles.date, className].join(' ')}>
        {currentDate}
      </p>
    </div>
  )
}

export default CustomDate
