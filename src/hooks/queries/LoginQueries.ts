import { useQuery } from '@tanstack/react-query'
import apiServices from '@/http/httpClient'
import { UserToken } from '@/types/user'
import { Login } from '@/types/login'

export const useLoginMutation = (params: Login) => {
  return useQuery<UserToken>({ queryKey: ['login', params], queryFn: apiServices.login} )
}
