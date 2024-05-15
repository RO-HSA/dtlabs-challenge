import { UserInfo } from './user'

export interface Sales {
  product: {
    name: string
  }
  date: string
  seller: UserInfo
  price: number
}
