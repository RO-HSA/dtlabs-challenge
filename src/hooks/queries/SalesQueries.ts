import { useQuery } from '@tanstack/react-query'
import { Sales } from '@/types/sales'
import apiServices from '@/http/httpClient'

export const useSalesQuery = () => {
  return useQuery<Sales[]>({
    queryKey: ['/sales'],
    queryFn: apiServices.getSales
  })
}

export const useUserSalesQuery = () => {
  return useQuery<Sales[]>({
    queryKey: ['user/sales'],
    queryFn: apiServices.getUserSales
  })
}
