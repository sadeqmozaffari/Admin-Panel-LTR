import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Customer = lazy(()=>import('../pages/customer/Customer'))
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'))
const Notfound= lazy(()=>import('../pages/notfound/NotFound'))
const RouteLinks = () => {
  return (
    
  <Routes>
    <Route path="/"  element={<Dashboard />} />   
      <Route path="customers" element={<Customer />} /> 
      <Route
        path="*"                                    
        element={<Notfound/>}
      />
    </Routes>


  )
}

export default RouteLinks