import React from "react";
import "../UserProfile/PopupUserEdit.css";
import { AiOutlineClose } from "react-icons/ai";

const PopupUserEdit = (props) => {
  return props.trigger ? (
    <div className='popupUSer'>
      <div className='popup-inner-user'>
        <div
          onClick={() => props.setTrigger(!props.trigger)}
          className='close-popup-icon'
        >
          <AiOutlineClose />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupUserEdit;
