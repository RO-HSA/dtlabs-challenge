import { FC, useEffect, useMemo } from 'react'
import Loading from '@/components/Loading'
import { useUserSalesQuery } from '@/hooks/queries/SalesQueries'
import styles from './lastSales.module.css'

const LastSales: FC = () => {
  const { gridContainer, gridLine, title } = styles
  const { data, isLoading } = useUserSalesQuery()

  useEffect(() => {
    document.title = 'Dashboard'
  }, [])

  const list = useMemo(() => {
    return data?.map((item, index) => (
      <div className={gridLine} key={index}>
        <p>{item.product.name}</p>
        <p>{item.date.split(',')[0]}</p>
        <p>{item.date.split(',')[1].replace(' BRT', '')}</p>
        <p>{`${item.seller.first_name} ${item.seller.last_name}`}</p>
      </div>
    ))
  }, [data])

  if (isLoading) return (
    <div style={{position: 'absolute', top: '50%', left: '50%'}}>
      <Loading />
    </div>
  )

  return (
    <div>
      {data?.length !== 0 && (
        <>
          <h2 className={title}>Últimas vendas deste mês</h2>
          <div className={gridContainer}>{list}</div>
        </>
      )}
    </div>
  )
}

export default LastSales
