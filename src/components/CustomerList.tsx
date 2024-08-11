import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useFetchPhoto";
import { Customer } from "../types/customer";
import CustomerCard from "./CustomerCard";
import { selectCustomer } from "../reduxToolkit/customerSlice/customerSlice";

const CustomerList: React.FC = () => {
  const customers = useAppSelector((state) => state.customers.customers);
  const selectedCustomerId = useAppSelector(
    (state) => state.customers.selectedCustomer?.id
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (customers.length > 0) {
      dispatch(selectCustomer(customers[0])); // Select the first customer by default
    }
  }, [customers, dispatch]); 

  const handleSelectCustomer = (customer: Customer) => {
    dispatch(selectCustomer(customer));
  };

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomerId === customer.id}
          onClick={() => handleSelectCustomer(customer)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
