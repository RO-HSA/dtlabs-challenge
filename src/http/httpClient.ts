import axios from "axios"

import { Sales } from "@/types/sales"
import { dateTimeIntl } from "@/utils/DateTime"
import { TOKEN_KEY } from "@/utils/keys"

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
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
      localStorage.removeItem(TOKEN_KEY)
    } else {
      return Promise.reject(err)
    }
  }
)

const getSales = async ({ queryKey }: any) => {
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

const apiServices = {
  getSales
}

export default apiServices
