import React from 'react';
import CustomSelect from './CustomSelect';
import { useDispatch } from 'react-redux'
import { setCategoryFilter, setOrderFilter, setDateFilter } from '../../redux/searchReducer'


const DropDownSelect = () => {
    const dispatch = useDispatch()

    // category filter 
    const handleCategorySelect = (e) => {
        dispatch(setCategoryFilter(e.target.value))
    }

    // order filter state 
    const handleOrderFilter = (e) => {
        dispatch(setOrderFilter(e.target.value))
    }

    // date filter state 
    const handleDateFilter = (e) => {
        dispatch(setDateFilter(e.target.value))
    }
  return (
      <div className='sort_section'>
          
          <p className='sort'>Sort By:</p>

            <CustomSelect handleChange={(e) => handleCategorySelect(e)} label='Category'>
                <option>All</option>
                <option>Education</option>
                <option>E-commerce</option>
                <option>Health</option>
            </CustomSelect>

            <CustomSelect handleChange={(e) => handleOrderFilter(e)} label='Order'>
                <option>Default</option>
                <option>Ascending</option>
                <option>Descending</option>
            </CustomSelect>

            <CustomSelect handleChange={(e) => handleDateFilter(e)} label='Date'>
                <option>Default</option>
                <option>Ascending</option>
                <option>Descending</option>
            </CustomSelect>

      </div>
  )
};

export default DropDownSelect;
