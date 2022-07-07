import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ViewCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getCustomerAPI = async () => {
      try {
        const url = `http://localhost:4000/customers/${id}`;
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

  const { name, company, email, phone, notes } = customer;

  return loading ? (
    <Spinner />
  ) : Object.keys(customer).length === 0 ? (
    <p className='font-black text-4xl text-blue-900'>No Results</p>
  ) : (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>
        Customer Information
      </h1>

      <p className='text-2xl text-slate-600 mt-10'>
        <span className='text-slate-800 uppercase font-bold'>Customer: </span>
        {name}
      </p>
      <p className='text-2xl text-slate-600 mt-4'>
        <span className='text-slate-800 uppercase font-bold'>Company: </span>
        {company}
      </p>
      <p className='text-2xl text-slate-600 mt-4'>
        <span className='text-slate-800 uppercase font-bold'>E-mail: </span>
        {email}
      </p>
      {phone && (
        <p className='text-2xl text-slate-600 mt-4'>
          <span className='text-slate-800 uppercase font-bold'>Phone: </span>
          {phone}
        </p>
      )}

      {notes && (
        <p className='text-2xl text-slate-600 mt-4'>
          <span className='text-slate-800 uppercase font-bold'>Notes: </span>
          {notes}
        </p>
      )}
    </div>
  );
};

export default ViewCustomer;
