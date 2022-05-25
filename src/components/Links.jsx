import { Route, Routes } from "react-router-dom"
import Dashboard from '../pages/dashboard/Dashboard'
import Customer from '../pages/customer/Customer'

const Links = () => {
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

export default Links