import { useMemo } from 'react'
import ProfileInfos from './ProfileInfos'
import Loading from '../Loading'
import { useProfileQuery } from '@/hooks/queries/ProfileQueries'
import profilePic from '@/assets/profile-picture.jpg'
import styles from './profile.module.css'


const Profile = () => {
  const { container, wrapper, firstSection, secondSection, name, occupancy } = styles
  const { data } = useProfileQuery()

  const profileData = useMemo(() => data, [data])

  if (!profileData) return <Loading />

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={firstSection}>
          <img src={profilePic} alt="Profile picture" />
          <span className={name}>{`${profileData?.first_name} ${profileData?.last_name}`}</span>
          <span className={occupancy}>{profileData?.occupancy}</span>
        </div>
        <div className={secondSection}>
          <ProfileInfos label="Primeiro Nome" data={profileData?.first_name} />
          <ProfileInfos label="Sobrenome" data={profileData?.last_name} />
          <ProfileInfos label="Telefone" data={profileData?.phone} />
          <ProfileInfos label="E-mail" data={profileData?.email} />
          <ProfileInfos label="CPF" data={profileData?.cpf} />
          <ProfileInfos label="ID" data="21323-12312-31290" />
        </div>
      </div>
    </div>
  )
}

export default Profile
