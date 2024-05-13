import { useQuery } from '@tanstack/react-query'
import apiServices from '@/http/httpClient'
import { UserInfo } from '@/types/user'

export const useProfileQuery = () => {
  return useQuery<UserInfo>({ queryKey: ['users/me'], queryFn: apiServices.getProfile })
}
