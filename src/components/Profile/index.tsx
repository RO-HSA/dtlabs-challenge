import ProfileInfos from './ProfileInfos'
import Logo from '@/assets/logo.svg'
import styles from './profile.module.css'


const Profile = () => {
  const { container, wrapper, firstSection, secondSection, name, occupancy } = styles

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={firstSection}>
          <img src={Logo} alt="Profile picture" />
          <span className={name}>Marcelo Eduardo Benencase</span>
          <span className={occupancy}>Mestre do Bingo</span>
        </div>
        <div>
          <div className={secondSection}>
            <ProfileInfos label="Primeiro Nome" data="Marcelo" />
            <ProfileInfos label="Sobrenome" data="Benencase" />
            <ProfileInfos label="Telefone" data="Benencase" />
            <ProfileInfos label="E-mail" data="Benencase" />
            <ProfileInfos label="CPF" data="Benencase" />
            <ProfileInfos label="ID" data="Benencase" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
