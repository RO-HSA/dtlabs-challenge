import { Link, useLocation } from 'react-router-dom'
import { PiHouseFill } from 'react-icons/pi'
import { AiOutlineLineChart } from 'react-icons/ai'
import { BiSolidData } from 'react-icons/bi'
import { PiUserCircleThin } from 'react-icons/pi'
import { MdLogout } from 'react-icons/md'

import { logout } from '@/utils/utils'
import Separator from './Separator'
import logo from '@/assets/logo.svg'
import styles from './sidebar.module.css'

const Sidebar = () => {
  const { menu, sidebar, logoWrapper, menuItems, menuItem, active, separator } =
    styles
  const location = useLocation().pathname

  return (
    <div className={sidebar}>
      <div className={logoWrapper}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={menu}>
        <div className={menuItems}>
          <Link
            to="/"
            className={[menuItem, location === '/' ? active : ''].join(' ')}
          >
            <PiHouseFill size={32} />
            Dashboard
          </Link>
          <Link
            to="/graficos"
            className={[menuItem, location === '/graficos' ? active : ''].join(
              ' '
            )}
          >
            <AiOutlineLineChart size={32} />
            Gráficos
          </Link>
          <Link
            to="/usuarios"
            className={[menuItem, location === '/usuarios' ? active : ''].join(
              ' '
            )}
          >
            <BiSolidData size={32} />
            Usuários
          </Link>
        </div>
        <Separator
          width="94px"
          height="0.5px"
          bgColor="#BCBCBC"
          className={separator}
        />
        <div className={menuItems}>
          <Link
            to="/perfil"
            className={[menuItem, location === '/perfil' ? active : ''].join(
              ' '
            )}
          >
            <PiUserCircleThin size={32} />
            Perfil
          </Link>
          <Link to="/login" onClick={logout} className={menuItem}>
            <MdLogout size={32} />
            Logout
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
