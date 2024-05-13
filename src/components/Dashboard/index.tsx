import { FC } from 'react'
import LastSales from './LastSales'
import CustomDate from '../CustomDate'
import PageTitle from '../PageTitle'

const Dashboard: FC = () => {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <CustomDate />
      <LastSales />
    </>
  )
}

export default Dashboard
