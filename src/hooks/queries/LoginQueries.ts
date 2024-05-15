import { useMutation } from '@tanstack/react-query'
import apiServices from '@/http/httpClient'
import { LoginResponse } from '@/types/login'

export const useLoginMutation = (
  onSuccess: (data: LoginResponse) => void,
  onError: (error: Error) => void
) => {
  return useMutation({
    mutationFn: apiServices.login,
    onSuccess: onSuccess,
    onError: onError
  })
}
