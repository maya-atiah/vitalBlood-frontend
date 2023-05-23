import React, { useEffect, useState } from 'react'
import '../Donate/Donate.css'
import Loader from '../../Loader/Loader';


const Donate = () => {

  const [loading, setLoading] = useState(true);
  
   useEffect(() => {
  
     // Simulate loading for 3 seconds
     setTimeout(() => {
       setLoading(false);
     }, 2000);
   }, []);

   if (loading) {
     return <Loader />;
   }
  
  return (
    <div className='donate-container'>
      <div className='donate-subcontainer'>
 
      </div>
      
    </div>
  )
}

export default Donate
