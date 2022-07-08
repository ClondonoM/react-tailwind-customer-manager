import { useNavigate } from 'react-router-dom';
const Customer = ({ customer, handleDelete }) => {
  const navigate = useNavigate();
  const { name, company, email, phone, notes, id } = customer;
  return (
    <tr className='border hover:bg-slate-50'>
      <td className='p-3'>{name}</td>
      <td className='p-3'>
        <p>
          <span className='text-slate-800 uppercase font-bold'>E-mail: </span>
          {email}
        </p>
        <p>
          <span className='text-slate-800 uppercase font-bold'>Phone: </span>
          {phone}
        </p>
      </td>
      <td className='p-3'>{company}</td>
      <td className='p-3'>
        <button
          className='bg-green-600 hover:bg-green-700 text-white p-2 uppercase font-bold text-xs rounded-md block w-full'
          type='button'
          onClick={() => navigate(`/${id}`)}
        >
          View
        </button>
        <button
          className='bg-blue-600 hover:bg-blue-700 text-white p-2 uppercase font-bold text-xs rounded-md block w-full mt-3'
          type='button'
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
        <button
          className='bg-orange-600 hover:bg-orange-700 text-white p-2 uppercase font-bold text-xs rounded-md block w-full mt-3'
          type='button'
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Customer;
