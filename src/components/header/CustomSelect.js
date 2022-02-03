import React from 'react';

const CustomSelect = ({label, children, handleChange, value}) => {

  return (
    <div className='custom_select'>

        <p>{label}</p>
        <select value={value} onChange={(e) => handleChange(e)}>
            {children}
        </select>

    </div>
  )
  
};

export default React.memo(CustomSelect);
