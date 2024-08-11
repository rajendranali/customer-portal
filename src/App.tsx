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
        title: `Customer 01 is a long-standing client with a rich history in the industry. They have consistently demonstrated excellence in their field and continue to innovate with every project they undertake.

        Their head office is located in the bustling downtown area, where they oversee a range of operations that span across multiple sectors.

        Over the years, Customer 01 has received numerous awards for their outstanding service and commitment to quality.`,
        address: "123 Main St",
        photos: [],
      },
      {
        id: 2,
        name: "Customer 02",
        title: `Customer 02 is renowned for their strategic vision and forward-thinking approach. Their leadership team is composed of industry veterans who bring a wealth of experience and knowledge to the table.

        The company’s core values are centered around innovation, integrity, and customer satisfaction, making them a leader in their respective field.

        Customer 02 is headquartered in a state-of-the-art facility that reflects their commitment to cutting-edge technology and sustainable practices.`,
        address: "456 Elm St",
        photos: [],
      },
      {
        id: 3,
        name: "Customer 03",
        title: `Customer 03 has carved a niche for themselves in a highly competitive market. Their ability to adapt to changing market conditions has been key to their sustained success over the years.

        They are known for their collaborative approach, working closely with partners and stakeholders to achieve common goals.

        The team at Customer 03 is passionate about delivering results that exceed expectations, making them a preferred choice for many clients.`,
        address: "789 Oak St",
        photos: [],
      },
      {
        id: 4,
        name: "Customer 04",
        title: `Customer 04 is a global player with a presence in several countries around the world. Their expansive network and deep industry knowledge have allowed them to build a strong reputation in the market.

        The company places a high emphasis on corporate social responsibility, with initiatives that support local communities and environmental sustainability.

        With a dedicated team and a clear vision for the future, Customer 04 is poised for continued growth and success in the years to come.`,
        address: "101 Pine St",
        photos: [],
      },
      {
        id: 5,
        name: "Customer 05",
        title: `Customer 05 is a leader in their field, known for their innovative solutions and commitment to excellence. They have a strong track record of delivering projects on time and within budget.

        Their expertise spans a wide range of industries, making them a versatile and reliable partner for many businesses.

        At the heart of Customer 05’s success is a team of professionals who are dedicated to providing top-notch service and support to their clients.`,
        address: "202 Birch St",
        photos: [],
      },
      {
        id: 6,
        name: "Customer 06",
        title: `Customer 06 has a rich history of success, with a legacy that spans over several decades. Their deep understanding of the industry has enabled them to stay ahead of the competition and deliver exceptional results.

        The company is committed to continuous improvement, constantly seeking new ways to enhance their products and services.

        Customer 06’s client-centric approach has earned them a loyal customer base and a reputation for excellence in their field.`,
        address: "303 Cedar St",
        photos: [],
      },
      {
        id: 7,
        name: "Customer 07",
        title: `Customer 07 is known for their strategic partnerships and collaborative approach to business. They have built strong relationships with key players in the industry, allowing them to offer comprehensive solutions to their clients.

        The company’s commitment to quality and customer satisfaction is evident in every project they undertake.

        Customer 07’s innovative mindset and forward-thinking approach have positioned them as a leader in their field.`,
        address: "404 Maple St",
        photos: [],
      },
      {
        id: 8,
        name: "Customer 08",
        title: `Customer 08 is a dynamic and forward-thinking company that is constantly pushing the boundaries of innovation. Their cutting-edge solutions have set them apart in the industry and earned them a reputation for excellence.

        The company’s team of experts is dedicated to delivering high-quality results that meet the unique needs of their clients.

        With a focus on sustainability and corporate responsibility, Customer 08 is committed to making a positive impact in the communities they serve.`,
        address: "505 Walnut St",
        photos: [],
      },
      {
        id: 9,
        name: "Customer 09",
        title: `Customer 09 has a long-standing reputation for excellence and a commitment to delivering results that exceed expectations. Their client-focused approach has made them a trusted partner for businesses around the world.

        The company’s dedication to innovation and continuous improvement is evident in every project they undertake.

        Customer 09’s team of professionals is passionate about delivering solutions that drive success and create value for their clients.`,
        address: "606 Cherry St",
        photos: [],
      },
      {
        id: 10,
        name: "Customer 10",
        title: `Customer 10 is a globally recognized leader in their industry, known for their innovative solutions and commitment to sustainability. Their products and services are designed to meet the highest standards of quality and performance.

        The company’s team of experts is dedicated to delivering solutions that help their clients achieve their goals and succeed in a competitive market.

        Customer 10’s forward-thinking approach and focus on customer satisfaction have earned them a reputation for excellence in their field.`,
        address: "707 Hickory St",
        photos: [],
      },
    ];
    dispatch(setCustomers(customers));
  }, [dispatch]);

  return (
    <div className="app">
      <div className="heading">Customer Management</div>
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
