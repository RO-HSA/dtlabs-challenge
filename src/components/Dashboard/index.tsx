import { FC } from 'react'
import LastSales from './LastSales'
import CustomDate from '../CustomDate'
import PageTitle from '../PageTitle'
import styles from './dashboard.module.css'

const Dashboard: FC = () => {
  const { dateWrapper } = styles

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <div className={dateWrapper}>
        <CustomDate />
      </div>
      <LastSales />
    </>
  )
}

export default Dashboard
