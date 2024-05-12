import { FC } from 'react'

import { useSalesQuery } from '@/hooks/queries/SalesQueries'

import styles from './lastSales.module.css'

const LastSales: FC = () => {
  const { gridContainer, gridLine, title } = styles
  const { data, isLoading } = useSalesQuery()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      {data && (
        <>
          <h2 className={title}>Últimas vendas deste mês</h2>
          <div className={gridContainer}>
            {data?.map((item, index) => (
              <div className={gridLine} key={index}>
                <p>{item.product.name}</p>
                <p>{item.date.split(',')[0]}</p>
                <p>{item.date.split(',')[1].replace(' BRT', '')}</p>
                <p>{`${item.seller.first_name} ${item.seller.last_name}`}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default LastSales
