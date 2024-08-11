import React from "react";
import { Customer } from "../types/customer";

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`customer-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{customer.name}</h3>
      <p style={{fontSize:"8.5px",color:"gray"}}>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
