import { UserInfo } from './user'

export interface Sales {
  product: {
    name: string
  }
  date: string
  seller: UserInfo
  price: number
}

export interface DailySale {
  year: number;
  month: number;
  day: number;
  total: number;
  sellerFullName: string;
}
