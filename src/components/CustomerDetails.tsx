import React from "react";

import PhotoGrid from "./PhotoGrid";
import { useAppSelector } from "../hooks/useFetchPhoto";

const CustomerDetails: React.FC = () => {
  const selectedCustomer = useAppSelector(
    (state) => state.customers.selectedCustomer
  );

  if (!selectedCustomer)
    return (
      <div className="customer-details">Select a customer to view details.</div>
    );

  return (
    <div className="customer-details">
      <h2 style={{color:"black"}}>{selectedCustomer.name}</h2>
      <p>{selectedCustomer.title}</p>
      <p>{selectedCustomer.address}</p>
      <PhotoGrid customerId={selectedCustomer.id} />
    </div>
  );
};

export default CustomerDetails;
