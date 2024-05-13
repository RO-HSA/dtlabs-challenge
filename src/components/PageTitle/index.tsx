import { FC, ReactNode } from "react"

interface Props {
  fontSize?: string,
  fontWeight?: number,
  marginBottom?: string,
  children: ReactNode,
}

const PageTitle: FC<Props> = ({ fontSize = '30px', fontWeight = 500, marginBottom = '40px', children }) => {
  return <h1 style={{fontSize, fontWeight, marginBottom}}>{children}</h1>
}

export default PageTitle
