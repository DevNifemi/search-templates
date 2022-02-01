import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchInput: '',
        categoryFilter: 'All',
        orderFilter: 'Default',
        dateFilter: 'Default'
    },

    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload
        },
        setOrderFilter:(state, action) => {
            state.orderFilter = action.payload
        },
        setDateFilter:(state, action) => {
            state.dateFilter = action.payload
        },
    },

});

export const {setSearchInput, setCategoryFilter, setOrderFilter, setDateFilter} = searchSlice.actions

export default searchSlice.reducer