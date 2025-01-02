import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "../pages/layout/Layout"
import About from "../pages/About"
import Service from "../pages/Service"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

const Routers = () => {
    const navigate = useNavigate()
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
                        },
                        {
                            path: "*",
                            element: <div className="text-white justify-center items-center h-[88vh] w-full">
                                <div className="flex justify-center items-center h-full flex-col gap-2">
                                    <h2 className="text-5xl">404</h2>
                                    <p>This page does not exist...</p>
                                    <Button variant="outlined" onClick={()=>navigate("/")}>Go Home</Button>
                                </div>
                            </div>
                        }
                    ]   
                },
            ])
        } 
    </>
  )
}

export default Routers