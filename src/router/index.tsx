import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../pages/layout/Layout"
import About from "../pages/About"
import Service from "../pages/Service"

const Routers = () => {
  return (
    <>
        {
            useRoutes([
                {
                    path: "/",
                    element: <Layout/>,
                    children: [
                        {
                            path: "/",
                            element: <Home/>
                        },
                        {
                            path: "/about",
                            element: <About/>
                        },
                        {
                            path: "/service",
                            element: <Service/>
                        }
                    ]   
                },
            ])
        } 
    </>
  )
}

export default Routers