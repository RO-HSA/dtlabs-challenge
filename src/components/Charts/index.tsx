import PageTitle from '@/components/PageTitle'
import CustomDate from '@/components/CustomDate'

import styles from './charts.module.css'

const Charts = () => {
  const { chartHeader, filterGroup, filter} = styles

  return (
    <div>
      <div className={chartHeader}>
        <PageTitle marginBottom='4px'>Gráficos de Venda</PageTitle>
        <CustomDate fontSize='16px' borderBottom='none'/>
        <div className={filterGroup}>
          <div className={filter}>
            <label>Ano de Referência</label>
            <select>
              <option value="asc">Ordem Crescente</option>
              <option value="desc">Ordem Decrescente</option>
            </select>
          </div>
          <div className={filter}>
            <label>Vendedor</label>
            <select>
              <option value="asc">Ordem Crescente</option>
              <option value="desc">Ordem Decrescente</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
