import React from 'react'
import '../Request/PopupRequest.css'
import { AiOutlineClose } from "react-icons/ai";


const PopupRequest = (props) => {
 return props.trigger ? (
   <div className='popupRequest'>
     <div className='popup-inner'>
       <div
         onClick={() => props.setTrigger(!props.trigger)}
         className='close-popup-icon'
       >
        <AiOutlineClose/>
        
       </div>
       {props.children}
     </div>
   </div>
 ) : (
   ""
 );
}

export default PopupRequest
