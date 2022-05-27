import './layout.css'
import { useSelector, useDispatch } from "react-redux"
import ThemeAction from '../../redux/actions/ThemeAction'
import { useEffect, useState } from "react"
import ClockLoader from "react-spinners/ClockLoader"
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import RouteLinks from '../RouteLinks'
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
      {loading ?  <div className='appLayout'>  <ClockLoader  color={`#349eff`}   size={150} />
       <div className="app-text">
       {`\n`}
           <h2>
           please wait a moment :) 
          </h2>
       </div>
       </div>
       :<BrowserRouter> 
       <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar/>
            <div className="layout__content">
            <Navbar/>
                <div className="layout__content-main">
                    <RouteLinks/>
                </div>
            </div>
      </div>
      </BrowserRouter>
       }
    </div>
    
   
  
    
    

  )
}

export default Layout