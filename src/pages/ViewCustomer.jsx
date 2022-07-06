import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewCustomer = () => {
  const [customer, setCustomer] = useState({});
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
    };
    getCustomerAPI();
  }, []);

  const { name, company, email, phone, notes } = customer;

  return (
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