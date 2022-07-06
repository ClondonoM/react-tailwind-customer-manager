import { useEffect, useState } from 'react';

const Home = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomerAPI = async () => {
      try {
        const url = 'http://localhost:4000/customers';
        const response = await fetch(url);
        const result = await response.json();
        setCustomers(result);
      } catch (err) {
        console.log(error);
      }
    };
    getCustomerAPI();
  }, []);

  return <div>from Home</div>;
};

export default Home;
