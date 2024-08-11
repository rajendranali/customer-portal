import React, { useEffect } from "react";

import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import { useAppDispatch } from "./hooks/useFetchPhoto";
import { Customer } from "./types/customer";
import { setCustomers } from "./reduxToolkit/customerSlice/customerSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const customers: Customer[] = [
      {
        id: 1,
        name: "Customer 01",
        title: "Details about Customer 01",
        address: "123 Main St",
        photos: [],
      },
      {
        id: 2,
        name: "Customer 02",
        title: "Details about Customer 02",
        address: "456 Elm St",
        photos: [],
      },
      {
        id: 3,
        name: "Customer 03",
        title: "Details about Customer 03",
        address: "789 Oak St",
        photos: [],
      },
      {
        id: 4,
        name: "Customer 04",
        title: "Details about Customer 04",
        address: "101 Pine St",
        photos: [],
      },
    ];
    dispatch(setCustomers(customers));
  }, [dispatch]);

  return (
    <div className="app">
      <div className="heading">This here is the heading</div>
      <div className="container">
        <div className="sidebar">
          <CustomerList />
        </div>
        <div className="details">
          <CustomerDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
