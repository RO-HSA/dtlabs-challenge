import { useEffect, useMemo, useState } from 'react'
import { useSalesQuery } from '@/hooks/queries/SalesQueries'
import { DailySale } from '@/types/sales'
import PageTitle from '@/components/PageTitle'
import CustomDate from '@/components/CustomDate'
import SalesChart, { SalesChartType } from './SalesChart'
import Loading from '../Loading'
import getDailySales from '@/utils/DailySales'

import styles from './charts.module.css'
import ChartModal from './ChartModal'

const Charts = () => {
  const { chartHeader, filterGroup, filter, chart, chartsContainer } = styles

  const [sales, setSales] = useState<DailySale[]>([])
  const [year, setYear] = useState('')
  const [seller, setSeller] = useState('')
  const { data, isLoading } = useSalesQuery()

  useEffect(() => {
    if (data) {
      const dailySales = getDailySales(data)
      setSales(dailySales)
    }
  }, [data])

  const sellers = useMemo(() => {
    const sellersArr = sales.map((sale) => sale.sellerFullName)

    return [...new Set(sellersArr)]
  }, [sales])

  const years = useMemo(() => {
    const yearsArr = sales.map((sale) => sale.year)

    return [...new Set(yearsArr)]
  }, [sales])

  const monthLookup: { [key: number]: string } = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro'
  }

  const newSalesData = useMemo(() => {
    const salesFilteredByYearSeller = sales.filter(
      (sale) => String(sale.year) === year && sale.sellerFullName === seller
    )
    const monthsArr = salesFilteredByYearSeller.map((item) => item.month)
    const uniqueMonths = [...new Set(monthsArr)]
    const charts: JSX.Element[] = []

    uniqueMonths.sort((a, b) => a - b)

    for (let i = 0; i < uniqueMonths.length; i++) {
      const daysFilteredByMonth = salesFilteredByYearSeller.filter(
        (item) => item.month === uniqueMonths[i]
      )

      const days: SalesChartType[] = []

      daysFilteredByMonth.forEach((item) => {
        days.push({ day: item.day, value: Number(item.total.toFixed(2)) })
      })

      charts.push(
        <div className={chart}>
          <SalesChart
            title={monthLookup[uniqueMonths[i]]}
            key={monthLookup[uniqueMonths[i]]}
            data={days}
          />
        </div>
      )
    }

    return charts
  }, [year, seller])

  if (isLoading) return <Loading />

  return (
    <div>
      <div className={chartHeader}>
        <PageTitle marginBottom="4px">Gráficos de Venda</PageTitle>
        <CustomDate fontSize="16px" borderBottom="none" />
        <div className={filterGroup}>
          <div className={filter}>
            <label>Ano de Referência</label>
            <select onChange={(e) => setYear(e.target.value)}>
              <option value=""></option>
              {years.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={filter}>
            <label>Vendedor</label>
            <select onChange={(e) => setSeller(e.target.value)}>
              <option></option>
              {sellers.map((seller) => (
                <option value={seller} key={seller}>
                  {seller}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={chartsContainer}>{newSalesData}</div>
    </div>
  )
}

export default Charts
