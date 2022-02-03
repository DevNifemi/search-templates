import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { setSearchInput } from '../../redux/searchReducer'

const SearchInput = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState('')

    const searchTemplate = () => {
        dispatch(setSearchInput(state))
        // clear input field after button click 
        setState('')
    }

    return (
        <div className='searchbox d-flex'>
          <input
            className='search_input'
            placeholder='Search Templates'
            value={state}
            onChange={e => setState(e.target.value)}
          />

          <i onClick={searchTemplate} className='bx bx-search'/>
        </div>
      );
};

export default SearchInput;
