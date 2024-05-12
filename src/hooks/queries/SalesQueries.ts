import { useQuery } from '@tanstack/react-query'
import { Sales } from '@/types/sales'
import apiServices from '@/http/httpClient'

export const useSalesQuery = () => {
  return useQuery<Sales[]>({ queryKey: ['user/sales'], queryFn: apiServices.getSales })
}
