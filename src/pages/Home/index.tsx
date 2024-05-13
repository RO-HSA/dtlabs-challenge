import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div className="container">
      <menu>
        <Sidebar />
      </menu>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Home
