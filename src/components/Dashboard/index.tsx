import { FC } from 'react'
import LastSales from './LastSales'
import CustomDate from '../CustomDate'
import PageTitle from '../PageTitle'

const Dashboard: FC = () => {
  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      <CustomDate />
      <LastSales />
    </div>
  )
}

export default Dashboard
