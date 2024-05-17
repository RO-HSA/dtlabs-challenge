export interface UserToken {
  access_token: string
  token_type: string
}

export interface UserInfo {
  first_name: string
  last_name: string
  phone: string
  email: string
  cpf: string
  access_level: 0 | 1
  occupancy: string
}
