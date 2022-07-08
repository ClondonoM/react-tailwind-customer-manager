import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormCustomer from '../components/FormCustomer';

const EditCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    const getCustomerAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setCustomer(result);
      } catch (err) {
        console.log(error);
      }

      setLoading(!loading);
    };
    getCustomerAPI();
  }, []);
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Edit Customer {id}</h1>
      <p className='mt-3'>Edit customer register</p>
      {customer?.id ? (
        <FormCustomer customer={customer} loading={loading} />
      ) : (
        <p className='font-black text-4xl text-blue-900'>No Results</p>
      )}
    </>
  );
};

export default EditCustomer;
