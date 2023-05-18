import React from 'react'
import '../Request/PopupRequest.css'



const PopupRequest = (props) => {
 return props.trigger ? (
   <div className='popupRequest'>
     <div className='popup-inner'>
       <button
         className='close-request-btn'
         onClick={() => props.setTrigger(!props.trigger)}
       >
         {""}
         close
       </button>
       {props.children}
     </div>
   </div>
 ) : (
   ""
 );
}

export default PopupRequest
