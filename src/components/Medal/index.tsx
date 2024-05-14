import { FC } from "react"

interface Props {
  bgColor?: string
}

const Medal: FC<Props> = ({bgColor = 'white'}) => {
  return <div style={{ backgroundColor: bgColor, width: '12px', height: '57px', borderRadius: '3px'}}></div>
}

export default Medal
