import { FC } from "react"

import styles from './profileInfos.module.css'

interface Props {
  label: string;
  data: string;
}

const ProfileInfos: FC<Props> = ({ label, data }) => {
  const { wrapper } = styles

  return (
    <div className={wrapper}>
      <label>{label}</label>
      <span>{data}</span>
    </div>
  )
}

export default ProfileInfos
