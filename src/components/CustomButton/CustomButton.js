import React from 'react'
import '../CustomButton/custombutton.scss'

const CustomButton = ({ children, contact, ...otherCustomButtonProps}) => {
    return (
    <div>
        <button 
        className={` 
         custom_btn`} 
        {...otherCustomButtonProps}
        >
        {children}
        </button>     
    </div>
)
}

export default CustomButton
