import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchInput from '../SearchInput'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('Input value', () => {
    const initialState = {
        searchInput: '',
        categoryFilter: 'All',
        orderFilter: 'Default',
        dateFilter: 'Default'
    }
    
    const mockStore = configureStore()
    let store;

    it('updates input on change', () => {
    store = mockStore(initialState)

      const setState = jest.fn((value) => {})
      
      const { queryByPlaceholderText } = render(
          <Provider store={store}>
              <SearchInput setState={setState}/>
          </Provider>
      )
  
      const searchInput = queryByPlaceholderText('Search Templates')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test')
    })
  })