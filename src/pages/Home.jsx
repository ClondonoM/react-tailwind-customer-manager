import { useEffect, useState } from 'react';
import Customer from '../components/Customer';

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

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      'Are you sure you want to delete this customer?'
    );
    if (confirmDelete) {
      try {
        const url = `http://localhost:4000/customers/${id}`;
        const response = await fetch(url, {
          method: 'DELETE',
        });
        await response.json();
        const arrayCustomers = customers.filter(
          (customer) => customer.id !== id
        );
        setCustomers(arrayCustomers);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
      <p className='mt-3'>Admin your customers</p>
      <table className='w-full mt-5 table-auto bg-white shadow-md rounded-md '>
        <thead className='bg-blue-800 text-white '>
          <tr>
            <th className='p-3'>Name</th>
            <th className='p-3'>Contact</th>
            <th className='p-3'>Company</th>
            <th className='p-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <Customer
              key={customer.id}
              customer={customer}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
