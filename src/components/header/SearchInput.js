import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { setSearchInput } from '../../redux/searchReducer'

const SearchInput = () => {
    const [state, setState] = useState('')
    const dispatch = useDispatch()

    const searchTemplate = () => {
        dispatch(setSearchInput(state))
    }

    return (
        <div className='searchbox d-flex'>
          <input
            className='search_input'
            placeholder='Search Templates'
            onChange={e => setState(e.target.value)}
          />

          <i  onClick={searchTemplate} className='bx bx-search'/>
        </div>
      );
};

export default SearchInput;
