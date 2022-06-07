import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Customer = lazy(()=>import('../pages/customer/Customer'))
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'))
const RouteLinks = () => {
  return (
    
  <Routes>
    <Route path="/"  element={<Dashboard />} />   
      <Route path="customers" element={<Customer />} /> 
      <Route
        path="*"                                    
        element={<div>Default Page Content</div>}
      />
    </Routes>


  )
}

export default RouteLinks