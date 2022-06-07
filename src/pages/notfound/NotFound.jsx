import { Link } from 'react-router-dom'
import './notfound.css'

const NotFound = () => {
  return (
    <div className='notfound-style'>
   
    <i className="bx bx-search size-icon-notfound"></i>
    <h4>Oops !!!</h4>
    <h2>404</h2>
       
      
      
      
        <Link to={-1} className='font-color'>
        <i className="bx bx-arrow-from-right back-font"> </i>  
        return
        </Link>
       
   
  </div>
  
  )
}

export default NotFound