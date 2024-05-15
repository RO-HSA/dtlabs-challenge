import { FC } from 'react'

import styles from './profileInfos.module.css'

interface Props {
  label: string
  data: string
  color?: string
}

const ProfileInfos: FC<Props> = ({ label, data, color }) => {
  const { wrapper } = styles

  return (
    <div className={wrapper}>
      <label>{label}</label>
      <span style={{ color }}>{data}</span>
    </div>
  )
}

export default ProfileInfos
