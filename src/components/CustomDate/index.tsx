import { getCurrentDate } from '@/utils/DateTime'

import styles from './customDate.module.css'

type Props = {
  fontSize?: string,
  className?: string
}

const CustomDate: React.FC<Props> = ({ className, fontSize = '32px' }: Props) => {
  const currentDate = getCurrentDate()

  return (
    <>
      <p style={{fontSize}} className={[styles.date, className].join(" ")}>{ currentDate }</p>
    </>
  )
}

export default CustomDate
