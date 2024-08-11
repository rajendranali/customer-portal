
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../../types/customer';


interface CustomerState {
    customers: Customer[];
    selectedCustomer: Customer | null;
}

const initialState: CustomerState = {
    customers: [], // This could be populated with initial data or fetched from an API
    selectedCustomer: null,
};

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setCustomers: (state, action: PayloadAction<Customer[]>) => {
            state.customers = action.payload;
        },
        selectCustomer: (state, action: PayloadAction<Customer>) => {
            state.selectedCustomer = action.payload;
        },
    },
});

export const { setCustomers, selectCustomer } = customerSlice.actions;

export default customerSlice.reducer;
