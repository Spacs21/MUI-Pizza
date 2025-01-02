import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


const Layout = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDark, setDark] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleDark = ()=>{
    setDark(!isDark)
  }

  return (
    <div>
      <div className={`sticky top-0 z-50 transition-opacity duration-300 ${isScrolled ? "opacity-75" : "opacity-100"}`}>
        <Header isDark={isDark} toggle={toggleDark}/>
      </div>
      <main className={`bg-gradient-to-br ${isDark ? "from-[#121212] via-[#121212] to-[#000000]" : "from-[#3cb8ff] drop-shadow-lg to-[#263ca1]"}`}>
        <Outlet/>
      </main>
      <Footer isDark={isDark}/>
    </div>
  )
}

export default Layout