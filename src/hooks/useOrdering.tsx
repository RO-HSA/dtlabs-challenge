import { OrderingContext } from '@/contexts/OrderingContext'
import { useContext } from 'react'

export const useOrdering = () => {
  return useContext(OrderingContext)
}
