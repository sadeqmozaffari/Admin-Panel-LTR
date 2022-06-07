import { ClockLoader } from 'react-spinners'
import './loader.css'


const Loader = () => {
  return (
    <div className='loader-style'>  <ClockLoader  color={`#349eff`}   size={150} />
       <div className="app-text">
           <h2>
           please wait a moment :) 
          </h2>
       </div>
    </div>
  )
}

export default Loader