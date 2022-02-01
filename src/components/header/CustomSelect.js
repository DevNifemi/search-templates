import React from 'react';

const CustomSelect = ({label, children, handleChange}) => {

  return (
    <div className='custom_select'>

        <p>{label}</p>
        <select onChange={(e) => handleChange(e)}>
            {/* RENDER OPTION TAGS  */}
            {children}
        </select>

    </div>
  )
  
};

export default CustomSelect;
