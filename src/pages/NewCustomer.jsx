import FormCustomer from '../components/FormCustomer';

const NewCustomer = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New Customer</h1>
      <p className='mt-3'>
        Fill in the following fields to register a customer
      </p>
      <FormCustomer />
    </>
  );
};

export default NewCustomer;
