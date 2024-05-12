import { FC } from 'react'

import LastSales from './LastSales'
import CustomDate from '../CustomDate'

import styles from './dashboard.module.css'

const Dashboard: FC = () => {
  const { title, dateWrapper } = styles

  return (
    <>
      <h1 className={title}>Dashboard</h1>
      <div className={dateWrapper}>
        <CustomDate />
      </div>
      <LastSales />
    </>
  )
}

export default Dashboard
