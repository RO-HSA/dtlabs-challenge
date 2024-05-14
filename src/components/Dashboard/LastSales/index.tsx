import { FC, useMemo } from 'react'
import Loading from '@/components/Loading'
import { useUserSalesQuery } from '@/hooks/queries/SalesQueries'
import styles from './lastSales.module.css'

const LastSales: FC = () => {
  const { gridContainer, gridLine, title } = styles
  const { data, isLoading } = useUserSalesQuery()

  const list = useMemo(() => {
    return (data?.map((item, index) => (
      <div className={gridLine} key={index}>
        <p>{item.product.name}</p>
        <p>{item.date.split(',')[0]}</p>
        <p>{item.date.split(',')[1].replace(' BRT', '')}</p>
        <p>{`${item.seller.first_name} ${item.seller.last_name}`}</p>
      </div>
    )))
  }, [data])

  if (isLoading) return <Loading />

  return (
    <>
      {data && (
        <>
          <h2 className={title}>Últimas vendas deste mês</h2>
          <div className={gridContainer}>
            {list}
          </div>
        </>
      )}
    </>
  )
}

export default LastSales
