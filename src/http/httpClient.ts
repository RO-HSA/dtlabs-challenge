import axios from "axios"

import { Sales } from "@/types/sales"
import { UserInfo, UserToken } from "@/types/user"
import { dateTimeIntl } from "@/utils/DateTime"
import { TOKEN_KEY } from "@/utils/keys"
import { Login } from "@/types/login"
import { logout } from "@/utils/utils"

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

const apiLoginClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  }
})

apiClient.interceptors.request.use(
  (response: any) => {
    const token = localStorage.getItem(TOKEN_KEY)
    response.headers.Authorization = `Bearer ${token}`
    return response
  },
  (err) => {
    return Promise.reject(err)
  }
)

apiClient.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      logout()
    } else {
      return Promise.reject(err)
    }
  }
)

const getSales = async ({ queryKey }: any) => {
  const queryUrl = queryKey[0]

  const { data } = await apiClient.get<Sales[]>(queryUrl)

  return data
}

const getUserSales = async ({ queryKey }: any) => {
  const queryUrl = queryKey[0]

  const { data } = await apiClient.get<Sales[]>(queryUrl)

  const sortedByDate = data.sort((a, b) => {
    let dateA = new Date(a.date)
    let dateB = new Date(b.date)

    return dateA.getTime() - dateB.getTime()
  })

  const newData = sortedByDate.map((item) => {
    const dateTime = dateTimeIntl(new Date(item.date))
    const data = {
      ...item,
      date: dateTime
    }

    return data
  }).reverse().slice(0, 4)

  return newData
}

const getProfile = async ({ queryKey }: any) => {
  const queryUrl = queryKey[0]

  const { data } = await apiClient.get<UserInfo>(queryUrl)

  return data
}

const login = async (data: Login) => {
  return await apiLoginClient.post<UserToken>('login', data)
}

const apiServices = {
  getSales,
  getUserSales,
  getProfile,
  login
}

export default apiServices
