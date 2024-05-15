import { useMemo } from 'react'
import { useSalesQuery } from '@/hooks/queries/SalesQueries'
import Loading from '@/components/Loading'

import styles from './sales.module.css'
import { Sales as SalesType } from '@/types/sales'
import Medal from '@/components/Medal'
import { useOrdering } from '@/hooks/useOrdering'

const Sales = () => {
  const { grid, line, name } = styles
  const { data, isLoading } = useSalesQuery()
  const { order } = useOrdering()

  const salesArr = useMemo(() => {
    const dataArr: SalesType[] = data ?? []

    const salesBySellerAcc: Map<string, number> = new Map()

    dataArr.forEach((sale) => {
      const sellerName = `${sale.seller.first_name} ${sale.seller.last_name}`
      const totalPrice = salesBySellerAcc.get(sellerName) ?? 0
      salesBySellerAcc.set(sellerName, totalPrice + sale.price)
    })

    const salesArr = Array.from(salesBySellerAcc.entries())
      .map(([sellerName, totalPrice]) => {
        return { name: sellerName, value: totalPrice }
      })
      .map((item) => {
        return {
          name: item.name,
          originalValue: item.value,
          newValue: `R$ ${new Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(item.value / 1000)}k`
        }
      })

    return salesArr
  }, [data])

  const list = useMemo(() => {
    let filter

    if (order === 'asc') {
      filter = salesArr.sort((a, b) => b.originalValue - a.originalValue)
    } else {
      filter = salesArr.sort((a, b) => a.originalValue - b.originalValue)
    }

    const list = filter.map((item, index) => {
      if (order === 'asc') {
        return (
          <div className={line} key={index}>
            <p className={name}>
              <Medal
                bgColor={
                  index === 0
                    ? '#FFD700'
                    : index === 1
                      ? '#C0C0C0'
                      : index === 2
                        ? '#CD7F32'
                        : ''
                }
              />
              {item.name}
            </p>
            <p>{item.newValue}</p>
          </div>
        )
      }

      return (
        <div className={line} key={index}>
          <p className={name}>
            <Medal
              bgColor={
                index === filter.length - 1
                  ? '#FFD700'
                  : index === filter.length - 2
                    ? '#C0C0C0'
                    : index === filter.length - 3
                      ? '#CD7F32'
                      : ''
              }
            />
            {item.name}
          </p>
          <p>{item.newValue}</p>
        </div>
      )
    })

    return list
  }, [order, salesArr])

  if (isLoading) return <Loading />

  return <div className={grid}>{list}</div>
}

export default Sales
