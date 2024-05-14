import { useOrdering } from '@/hooks/useOrdering'
import CustomDate from '../CustomDate'
import PageTitle from '../PageTitle'
import Sales from './Sales'

import styles from './users.module.css'

const Users = () => {
  const { filter } = styles

  const { setOrder } = useOrdering()

  return (
    <div>
      <PageTitle>Usuários</PageTitle>
      <CustomDate />
      <div className={filter}>
        <label>Ordernar por</label>
        <select onSelect={() => setOrder}>
          <option value="asc">Ordem Crescente</option>
          <option value="desc">Ordem Decrescente</option>
        </select>
      </div>
      <div>
        <Sales />
      </div>
    </div>
  )
}

export default Users