import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Layout = () => {
  return (
    <div>
        <Header/>
        <main className="bg-gradient-to-br from-[#121212] via-[#121212] to-[#000000]">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout