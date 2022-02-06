import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import { useDispatch } from 'react-redux'
import { setCategoryFilter, setOrderFilter, setDateFilter } from '../../redux/searchReducer'


const DropDownSelect = () => {
    const [value, setValue] = useState('All');
    const [orderValue, setOrderValue] = useState('Default');
    const [dateValue, setDateValue] = useState('Default');

    const dispatch = useDispatch()

    // category filter 
    const handleCategorySelect = (e) => {
        setValue(e.target.value)
        dispatch(setCategoryFilter(e.target.value))
    }

    // order filter state 
    const handleOrderFilter = (e) => {
        setOrderValue(e.target.value)
        dispatch(setOrderFilter(e.target.value))
        // set date filter to default if not 
        setDateValue('Default')
    }

    // date filter state 
    const handleDateFilter = (e) => {
        setDateValue(e.target.value)
        dispatch(setDateFilter(e.target.value))
        // set order filter to default if not 
        setOrderValue('Default')
    }

    
  return (
      <div className='sort_section'>
          
          <p className='sort'>Sort By:</p>

            <CustomSelect value={value} handleChange={(e) => handleCategorySelect(e)} label='Category'>
                <option>All</option>
                <option>Education</option>
                <option>E-commerce</option>
                <option>Health</option>
            </CustomSelect>

            <CustomSelect value={orderValue} handleChange={(e) => handleOrderFilter(e)} label='Order'>
                <option>Default</option>
                <option>Ascending</option>
                <option>Descending</option>
            </CustomSelect>

            <CustomSelect value={dateValue} handleChange={(e) => handleDateFilter(e)} label='Date'>
                <option>Default</option>
                <option>Ascending</option>
                <option>Descending</option>
            </CustomSelect>

      </div>
  )
};

export default DropDownSelect;
