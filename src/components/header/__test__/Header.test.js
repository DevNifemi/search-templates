import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const initialState = {
    searchInput: '',
    categoryFilter: 'All',
    orderFilter: 'Default',
    dateFilter: 'Default'
}

const mockStore = configureStore()
let store;


it('expect sort by text to be in the document', () => {
    store = mockStore(initialState)

  render(
      <Provider store={store}>
          <Header/>
      </Provider>
  );
  const headerElement = screen.getByText(/Sort By/i);
  expect(headerElement).toBeInTheDocument();
});