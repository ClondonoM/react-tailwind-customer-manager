import { Formik, Form, Field } from 'formik';

const FormCustomer = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
        Add Customer
      </h1>
      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          phone: '',
          notes: '',
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <Form className='mt-10'>
            <div className='mb-4'>
              <label className='text-slate-800 ' htmlFor='name'>
                Name:
              </label>
              <Field
                id='name'
                type='text'
                placeholder='Customer Name'
                className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                name='name'
              />
            </div>
            <div className='mb-4'>
              <label className='text-slate-800 ' htmlFor='company'>
                Company:
              </label>
              <Field
                id='company'
                type='text'
                placeholder='Customer Company Name'
                className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                name='company'
              />
            </div>
            <div className='mb-4'>
              <label className='text-slate-800 ' htmlFor='email'>
                E-mail:
              </label>
              <Field
                id='email'
                type='email'
                placeholder='Customer E-mail'
                className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                name='email'
              />
            </div>
            <div className='mb-4'>
              <label className='text-slate-800 ' htmlFor='phone'>
                Phone:
              </label>
              <Field
                id='phone'
                type='tel'
                placeholder='Customer Phone'
                className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                name='phone'
              />
            </div>
            <div className='mb-4'>
              <label className='text-slate-800 ' htmlFor='notes'>
                Notes:
              </label>
              <Field
                as='textarea'
                id='notes'
                type='textarea'
                placeholder='Notes'
                className='mt-2 block w-full p-3 bg-slate-50 rounded-md h-40'
                name='notes'
              />
            </div>
            <input
              type='submit'
              value='Add Customer'
              className='mt-5 w-full bg-blue-800 p-3 text-white text-lg rounded-md uppercase cursor-pointer'
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCustomer;
