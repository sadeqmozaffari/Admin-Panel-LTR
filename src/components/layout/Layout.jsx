import './layout.css'
import { useSelector, useDispatch } from "react-redux"
import ThemeAction from '../../redux/actions/ThemeAction'
import { Suspense, useEffect, useState } from "react"
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import RouteLinks from '../RouteLinks'
import Loader from '../loader/Loader'
const Layout = () => {
  const themeReducer = useSelector(state => state.ThemeReducer)
  const dispatch = useDispatch()
  useEffect(() => {
      const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

      const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

      dispatch(ThemeAction.setMode(themeClass))

      dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])

  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])


  return (
 
    <div >
      {loading ? <Loader/>
       : <BrowserRouter> 
      
       <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
      
            <Sidebar/>
            <div className="layout__content">
            <Navbar/>
                <div className="layout__content-main">
                <Suspense fallback={<Loader/>}>
                    <RouteLinks/>
                    </Suspense>
                </div>
            </div>
          
      </div>
      </BrowserRouter>
   

       }
    </div>
    
   
  
    
    

  )
}

export default Layout