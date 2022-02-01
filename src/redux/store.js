import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchReducer'


const store = configureStore({
  reducer: {
      search: searchReducer
  }
})

export default store