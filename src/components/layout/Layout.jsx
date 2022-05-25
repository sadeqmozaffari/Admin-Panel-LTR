import Sidebar from "../sidebar/Sidebar"
import Links from "../Links"
import { BrowserRouter } from "react-router-dom"
import TopNav from "../topNav/TopNav"
import './layout.css'
const Layout = () => {
  return (
    <BrowserRouter>
    <div className="layout">
            <Sidebar/>
            <div className="layout__content">
            <TopNav/>
                <div className="layout__content-main">
                    <Links/>
                </div>
            </div>
</div>
</BrowserRouter>
  )
}

export default Layout